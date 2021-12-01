const crypto = require("crypto")
const fs = require("fs")
const R = require("ramda")
const cardsJson = require("./cards.json")

function generateUid() {
    return crypto.randomBytes(16).toString("hex")
}

const capitalize = R.compose(
    R.join(""),
    R.juxt([R.compose(R.toUpper, R.head), R.tail])
)

function tagsToStackName(tags) {
    return R.join(" -- ", R.map(R.pipe(R.split("-"), R.map(capitalize), R.join(" ")), tags))
}

function convertCardsToStateFormat(card) {
    const stack = tagsToStackName(card.front.tags)

    const newCard = {
        uid: generateUid(),
        name: (card.front.name == card.back.name) ? card.front.name : `${card.front.name} / ${card.back.name}`,
        front: {
            name: card.front.name,
            description: card.front.desc,
        },
        back: {
            name: card.back.name,
            description: card.back.desc,
        },
        flipped: false,
        home: stack,
        location: null,
    }

    return newCard
}

const newCards = R.map(convertCardsToStateFormat, cardsJson)

const stackNames = R.uniq(R.pluck("home", newCards))

const collectionArray = R.map(name => ({
    uid: generateUid(),
    name,
    expanded: false
}), stackNames)

const collections = R.reduce((collections, collection) => R.assoc(collection.uid, collection, collections), {}, collectionArray)

const collectionsByName = R.reduce((collections, collection) => R.assoc(collection.name, collection, collections), {}, collectionArray)

const cards = R.map(R.evolve(
    {
        home: (name) => collectionsByName[name].uid
    }),
    newCards)

fs.writeFileSync("default-schema.json", JSON.stringify({cards, collections}, null, 2))
