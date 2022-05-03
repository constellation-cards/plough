interface CardFace {
  name: string;
  description: string;
}

interface Card {
  uid: string;
  name: string;
  flipped: boolean;
  home: string;
  location: string | null;
  front: CardFace;
  back: CardFace;
}

interface Collection {
  uid: string;
  name: string;
  expanded: boolean;
}

interface State {
  cards: Card[],
  collections: Record<string,Collection>
}

// When dealing cards into this preset, should we flip them?
export enum PresetFlipRule {
  NO,
  YES,
  RANDOM
}

interface PresetCollection {
  collectionUid: string;
  flipRule: PresetFlipRule;
}

interface Preset {
  name: string;
  description: string;
  collections: PresetCollection[];
}

export const defaultState: State = {
  "cards": [
    {
      "uid": "8b6a8f36229f1c8bd60af23511d2771a",
      "name": "The Principal",
      "front": {
        "name": "The Principal",
        "description": "You get to create and play a Principal Character (PC), one of the protagonists of the story.\nYour job is to narrate your character's actions and reactions. Decide on their agendas, then enact them in interesting ways.\nWhen someone asks \"what does your character do, say, or think?\", you get to answer.\n\n- Stay true to your character\n- Share ways for other players to help you have fun\n- Look for opportunities to advance your story\n- Support other players' stories\n\nWhoever plays this card is a principal. Flip for additional rules."
      },
      "back": {
        "name": "The Principal",
        "description": "During play, you can speak from one of several agendas.\nThese agendas can be assigned individually to several people, or all given to a single player (\"the Game Master\" or \"the GM\").\nThe agendas can change hands during the game. You cannot take an agenda away from someone else, but you can ask someone else to give up an agenda.\nIf you've been assigned a agenda, you are bound to speak from it.\n\n\nWhoever plays this card is a principal. Flip for additional rules."
      },
      "flipped": false,
      "home": "5ff9ff9703cabc6dc8d60eba71ac8343",
      "location": null
    },
    {
      "uid": "510d312c76e4a2d204981e0719d6a42e",
      "name": "The Facilitator",
      "front": {
        "name": "The Facilitator",
        "description": "Players in the spotlight are the focus of narration. We're asking them for an action that pushes the scene forward, and shining the spotlight until they make one.\nYour job is to oversee moving the spotlight from player to player in fun and fair ways.\nMove the spotlight:\n\n- toward a PC who's placed at risk or in danger\n- toward a player who hasn't acted recently\n- toward a player who has an interesting idea for how to move things forward\n- away from a player who just resolved a dramatic or decisive action\n- away from a cliffhanger or moment of tension\n- away from any player who's had it too long\n\nWhoever plays this card is the facilitator. Flip for additional rules."
      },
      "back": {
        "name": "The Facilitator",
        "description": "During play, you can speak from one of several agendas.\nThese agendas can be assigned individually to several people, or all given to a single player (\"the Game Master\" or \"the GM\").\nThe agendas can change hands during the game. You cannot take an agenda away from someone else, but you can ask someone else to give up an agenda.\nIf you've been assigned a agenda, you are bound to speak from it.\n\n\nWhoever plays this card is the facilitator. Flip for additional rules."
      },
      "flipped": false,
      "home": "5ff9ff9703cabc6dc8d60eba71ac8343",
      "location": null
    },
    {
      "uid": "9338cd6fed6a13c5d139aa4e32ba673b",
      "name": "The lorekeeper",
      "front": {
        "name": "The lorekeeper",
        "description": "Your job is to establish the history, setting, and canon of the world in which the game happens.\nWhen someone asks, \"what do our characters know about X?\" and it's not a question for an Ensemble Character (EC) to decide, you get to answer.\nAny player can suggest an answer, but you have the final say on what's true. If a specific PC's heritage, origin, or interests concern the question, consider deferring to them.\n\n- Who was the greatest Paladin in history?\n- What languages might my character learn to speak?\n- When did the dragons disappear?\n- How does magic work, anyway?\n\nWhoever plays this card is the lorekeeper. Flip for additional rules."
      },
      "back": {
        "name": "The lorekeeper",
        "description": "During play, you can speak from one of several agendas.\nThese agendas can be assigned individually to several people, or all given to a single player (\"the Game Master\" or \"the GM\").\nThe agendas can change hands during the game. You cannot take an agenda away from someone else, but you can ask someone else to give up an agenda.\nIf you've been assigned a agenda, you are bound to speak from it.\n\n\nWhoever plays this card is the lorekeeper. Flip for additional rules."
      },
      "flipped": false,
      "home": "5ff9ff9703cabc6dc8d60eba71ac8343",
      "location": null
    },
    {
      "uid": "b5edfe04ba7b53c17503d81f390c9885",
      "name": "The Referee",
      "front": {
        "name": "The Referee",
        "description": "Your job is to adjudicate questions about the rules of the game, and to make changes to the rules with the group's consent. Any player can suggest how to handle a rule, but you have the final say.\nExample rulings:\n\n- Is a given card applicable to this fictional situation?\n- How should a given card's text be interpreted?\n- Is it time to create a new card?\n\nWhoever plays this card is the referee. Flip for additional rules."
      },
      "back": {
        "name": "The Referee",
        "description": "During play, you can speak from one of several agendas.\nThese agendas can be assigned individually to several people, or all given to a single player (\"the Game Master\" or \"the GM\").\nThe agendas can change hands during the game. You cannot take an agenda away from someone else, but you can ask someone else to give up an agenda.\nIf you've been assigned a agenda, you are bound to speak from it.\n\n\nWhoever plays this card is the referee. Flip for additional rules."
      },
      "flipped": false,
      "home": "5ff9ff9703cabc6dc8d60eba71ac8343",
      "location": null
    },
    {
      "uid": "5057cb2e212317730e115b32e8802179",
      "name": "The Storyteller",
      "front": {
        "name": "The Storyteller",
        "description": "The Principal Characters (PCs) are the focus of the game. The game also has Ensemble Characters (ECs), sometimes called Non-Player Characters (NPCs).\nYour job is to narrate the ECs' actions and reactions. Decide on their agendas, then enact them in interesting ways.\nECs are allies, antagonists, or anyone else involved in the story but not at the heart of it.\n\n- Give ECs a name and identity\n- Find the essential humanity of every EC\n- Don't steal agency or spotlight from the PCs\n- Initiate actions that prompt a PC response\n\nWhoever plays this card is the storyteller. Flip for additional rules."
      },
      "back": {
        "name": "The Storyteller",
        "description": "During play, you can speak from one of several agendas.\nThese agendas can be assigned individually to several people, or all given to a single player (\"the Game Master\" or \"the GM\").\nThe agendas can change hands during the game. You cannot take an agenda away from someone else, but you can ask someone else to give up an agenda.\nIf you've been assigned a agenda, you are bound to speak from it.\n\n\nWhoever plays this card is the storyteller. Flip for additional rules."
      },
      "flipped": false,
      "home": "5ff9ff9703cabc6dc8d60eba71ac8343",
      "location": null
    },
    {
      "uid": "eac427f2e62b1ddf813c8c8054998a42",
      "name": "Challenges",
      "front": {
        "name": "Challenges",
        "description": "Any player may challenge a PC's action if failure is likely and success or failure are both interesting for the story.\nWhen your PC is challenged, you must generate a hit in order to succeed. Other rules provide ways to generate hits.\nIf you fail to meet a challenge, your PC's intentions are thwarted, or complications arise. There's no challenge if this can't happen.\n\n- You're navigating rough terrain, and might fall or lose equipment\n- You're fighting or fleeing a dangerous monster, and might get hurt\n- You're working with complex magic or technology, and it might malfunction\n- You're confronting an emotionally fraught situation where harm is possible\n\nFlip for additional rules."
      },
      "back": {
        "name": "Challenges",
        "description": "Challenges follow the principle of \"say yes or roll the dice\".\nUse challenges to increase or decrease the difficulty of a situation. For example, a risky combat scene might pose several challenges in succession. A simple social encounter might pose only one challenge.\nThe player posing the challenge should give an idea of what failure looks like. That player, or the Storyteller, might narrate the specifics of failure.\nThe same action should not be challenged multiple times unless there are both distinct and interesting ways for it to fail. For example, a demonstration of new magic might go awry by itself, but might also anger a jealous wizard who observes it.\n\n\nFlip for additional rules."
      },
      "flipped": false,
      "home": "527b736d4e0597761549380a2411ea44",
      "location": null
    },
    {
      "uid": "89c34ce38d8133413652454899421fc2",
      "name": "X-Card",
      "front": {
        "name": "X-Card",
        "description": "Start the game by reading this text aloud:\n\"I'd like your help. Your help to make this game fun for everyone. If anything makes anyone uncomfortable in any way, just lift this card up, or simply tap it. You don't have to explain why. It doesn't matter why. When we lift or tap this card, we simply edit out anything X-Carded.\"\n\"And if there is ever an issue, anyone can call for a break and we can talk privately. I know it sounds funny but it will help us play amazing games together and usually I'm the one who uses the X card to protect myself from all of you! Please help make this game fun for everyone. Thank you!\"\n\n\nLay this card at the center of the play area"
      },
      "back": {
        "name": "X-Card",
        "description": "Start the game by reading this text aloud:\n\"I'd like your help. Your help to make this game fun for everyone. If anything makes anyone uncomfortable in any way, just lift this card up, or simply tap it. You don't have to explain why. It doesn't matter why. When we lift or tap this card, we simply edit out anything X-Carded.\"\n\"And if there is ever an issue, anyone can call for a break and we can talk privately. I know it sounds funny but it will help us play amazing games together and usually I'm the one who uses the X card to protect myself from all of you! Please help make this game fun for everyone. Thank you!\"\n\n\nLay this card at the center of the play area"
      },
      "flipped": false,
      "home": "527b736d4e0597761549380a2411ea44",
      "location": null
    },
    {
      "uid": "ff1705d5015acebbde53431e0523c68d",
      "name": "Uncertain Crisis",
      "front": {
        "name": "Uncertain Crisis",
        "description": "Some situations cannot be solved by skill or virtue, but only good fortune.\nWhen you encounter such a crisis, decide what it would take to escape it, such as leaving the area successfully.\n\n- A chaotic natural disaster, such as flooding\n- Navigating a complex and ever-shifting maze\n- Entreating with capricious spirits or divinities\n\nDefine the scope of the crisis, and flip this card"
      },
      "back": {
        "name": "Uncertain Crisis",
        "description": "You may not flip any cards in front of you (e.g. Character cards) to generate hits.\nYou may flip shared cards (e.g. Plot cards) or draw/pick a new card (e.g. Condition card, Random oracle card).\n\n\nFlip this card when the crisis is past"
      },
      "flipped": false,
      "home": "7217b63d98260500b3aa9d7a0b49c4e3",
      "location": null
    },
    {
      "uid": "bf166aa06d8f6c0f5c83954558a62554",
      "name": "Gauntlet Crisis",
      "front": {
        "name": "Gauntlet Crisis",
        "description": "Some situations are grueling and exhausting, wearing down your reserves faster than you can recover. Sooner or later, something has to give.\nWhen you encounter such a crisis, decide what it would take to survive it, such as escaping an enemy or saving a friend.\n\n- A furious and violent vehicle chase\n- Survival in a hostile and dangerous environment\n- An extended and grueling magical ritual\n\nDefine the scope of the crisis, and flip this card"
      },
      "back": {
        "name": "Gauntlet Crisis",
        "description": "No card in front of you (e.g. Character cards) may be flipped more than once to generate a hit.\nYou may flip group cards (e.g. Plot cards) or draw/pick a new card (e.g. Condition card, Random oracle card).\n\n\nFlip this card when the crisis is past"
      },
      "flipped": false,
      "home": "7217b63d98260500b3aa9d7a0b49c4e3",
      "location": null
    },
    {
      "uid": "999673c4df4d2a16719afaa4b4b0620c",
      "name": "Overwhelming Crisis",
      "front": {
        "name": "Overwhelming Crisis",
        "description": "Some situations will upset a character's mental equilibrium, or present a challenge so daunting that they aren't prepared to handle it immediately. Ultimately, though, the characters may rally and prevail.\nWhen you encounter such a crisis, decide what it would take to survive it, such as defeating an enemy or finding shelter.\n\n- Final boss fights\n- Sudden teleportation to a new world\n- Confrontation with divine forces\n\nDefine the scope of the crisis, and flip this card"
      },
      "back": {
        "name": "Overwhelming Crisis",
        "description": "Immediately flip all Character cards in front of all players to their back side.\nCards may be flipped back and used in the usual way from then on.\n\n\nFlip this card when the crisis is past"
      },
      "flipped": false,
      "home": "7217b63d98260500b3aa9d7a0b49c4e3",
      "location": null
    },
    {
      "uid": "d7328f52c41cb06257a0dd74a930d361",
      "name": "Courage",
      "front": {
        "name": "Courage",
        "description": "//\"It doesn't matter if I win. It matters if I don't try.\" -- Emory\nCourage is strength in the face of grief or pain. It's not just a willingness to do something, but to do it when there's every reason to hold back.\nCourage lets you fight when afraid, speak when being shouted down, stand up when you're injured, or take an unpopular stand.\n\n- Honor or pride must be upheld\n- Someone or something near you has already suffered harm\n- Nobody else can or will take the risk\n\nFlip to get a hit."
      },
      "back": {
        "name": "Courage",
        "description": "//\"Emory! Fall back! This isn't our fight!\" -- Tana\nCourage can twist into cowardice or recklessness. Not everyone knows the right time to run from a battle, or when a battle really needs to be fought. And not everyone is prepared to fight every battle they face.\n\n- Compromise a principle for safety or expedience\n- Run away to avoid getting hurt, physically or emotionally\n- Seek glory or self-aggrandizement\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "a55b6f7b39869c429b2b596541b2ea2a",
      "name": "Charm",
      "front": {
        "name": "Charm",
        "description": "//\"I only came here to see you!\" -- Basler\nThe essence of charm is creating a bond with someone. Make them feel interesting, or appreciated, or just part of something cool.\nCharm lets you awe, wow, surprise, or comfort people. It gets you through tough situations with style and panache, making people move aside for you or get behind you through force of personality.\n\n- Perform with grace and elegance\n- Get by on audacity\n- Gain someone's confidence\n\nFlip to get a hit."
      },
      "back": {
        "name": "Charm",
        "description": "//\"Listen, city boy. Stop talking or I'll cut your tongue out.\" -- Woody\nSome people can become enraptured by their own ability to impress and influence. They buy into the story they're selling, until reality intrudes.\nOthers see charm as deceit, and will trust you less.\n\n- Show off needlessly\n- Push things for the sake of pushing\n- Take advantage of someone's emotions\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "d887d93ccd4a7d8e6bd66ffdda2ca282",
      "name": "Instinct",
      "front": {
        "name": "Instinct",
        "description": "//\"My eye watches the target. My hand lets go the bowstring. I do nothing.\" -- Woody\nYou do things without thinking. Your heart, your conscience, a divine command, or something guides your actions.\nInstinct lets you act when everything says to hesitate, or when uncertainty overwhelms you, or when speed counts more than reason.\n\n- Take decisive action in the moment\n- Get an immediate read on a person or situation\n- Exploit a momentary opportunity\n\nFlip to get a hit."
      },
      "back": {
        "name": "Instinct",
        "description": "//\"So, he was a king's guard in disguise. He looked like a bad guy!\" -- Woody\nOnly fools rush in, and this time, you were the fool.\n\n- Interrupt a plan mid-execution\n- Misjudge someone's intentions or actions\n- Screw something up by impulsively acting\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "45d0e2807f5cc8dbb447294d6e67297d",
      "name": "Magic",
      "front": {
        "name": "Magic",
        "description": "//\"I don't know, I just felt ... something ... flow through me!\" -- Tana\nThe mystical, the eldritch, the arcane. The Power has many names. What do you call it?\nYou can achieve a variety of supernatural outcomes with magic, such as healing, curses, enchantments, and more.\n\n- Place the impossible within reach\n- Mingle the material and the symbolic\n- Infuse the ordinary with awe and mystery\n\nFlip to get a hit."
      },
      "back": {
        "name": "Magic",
        "description": "//\"The Power is much like the ocean. You can sail in it, or drown in it.\" -- Tana\nWhen called, the Power always comes. That doesn't mean you can always command it.\nThe costs and consequences of using magic can be anything, even for a familiar spell.\n\n- Face a cost you can't easily or immediately pay\n- Supply a rare material component or perform a ritual at specific place and time\n- Fall prey to a side effect or curse\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "acaec273a0c0e3d6d2ee1f8f6ebdaa9a",
      "name": "Secrets",
      "front": {
        "name": "Secrets",
        "description": "//\"Basler, where did you get that knife from?\" -- Tana\nYou deal in concealment, stealth, and subterfuge. Your tools are things people don't want known, or weren't expecting.\nYou could use hidden weapons, court gossip, cloak-and-dagger skulduggery, or the secrets of the heart.\n\n- Acquire something from someone else without their knowledge\n- Reveal something you've been concealing\n- Avoid detection or culpability\n\nFlip to get a hit."
      },
      "back": {
        "name": "Secrets",
        "description": "//\"You don't wanna know\" -- Basler\nThe problem with secrets is keeping track of who knows what. The value of a secret is lost once it's revealed. And some secrets weigh on the conscience.\n\n- Endure distrust from those around you\n- Reveal the wrong thing to the wrong person\n- Give yourself away at an inopportune moment\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "0b52b29e15aac625213b8afaa3ea842b",
      "name": "Tech",
      "front": {
        "name": "Tech",
        "description": "//\"Y'see, this gizmo here can automatically pick any lock in the kingdom!\" -- Basler\nYou focus on science, technology, or artifice to get things done.\nThis could include familiar inventions like handguns or balloons, or magitek such as glowing crystal fire-rods, or products of magic such as alchemical potions.\nYou can use, repair, or replace your toolkit of inventions.\n\n- Fight using advanced weapons or protective gear\n- Overcome obstacles by deploying a gadget\n- Gain surprise or advantage against those unfamiliar with your tech\n\nFlip to get a hit."
      },
      "back": {
        "name": "Tech",
        "description": "//\"The gizmo broke and I gotta fix it. Well, at least I have my tools.\" -- Basler\nNothing works perfectly, especially new inventions that have seen more use than testing.\n\n- The gadget has unexpected side effects or fails to work at a key moment\n- A gadget malfunctions or breaks in interesting ways\n- People distrust or avoid your strange science\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "7a73a9823aa2a49ec2da4c47ae215dbb",
      "name": "Training",
      "front": {
        "name": "Training",
        "description": "//\"The mind directs the body's power. I get it now.\" -- Basler\nThrough exercise, mindfulness, and practice, you've learned to use your own mind and body as a tool.\nTraining lets you fight, move, and act with grace, power, and precision. You can push your own abilities past normal limits, or unlock new ones.\n\n- Use your body's abilities in place of weapons, armor, or equipment\n- Focus inner strength to resist torment or temptation\n- Gain an understanding of someone from how they move\n\nFlip to get a hit."
      },
      "back": {
        "name": "Training",
        "description": "//\"Well, I can't pick locks with my fingernails, can I?\" -- Basler\nYour discipline is demanding, and while your body is versatile and powerful, it can't compete with everything.\n\n- Face a problem that requires tools after all\n- Spend time honing yourself instead of accomplishing an important goal\n- Reveal your abilities to someone you'd rather not see them\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "c7cf8d621c365b7e55b96458f467868a",
      "name": "Wits",
      "front": {
        "name": "Wits",
        "description": "//\"The world is full of opportunities!\" -- Basler\nCharacters who live by their wits take advantage of the things (and people) around them. They turn difficulty into opportunity, or find a new way to look at a situation.\nWits lets you find solutions within the problem you face, create plans, and know when to abandon those plans.\n\n- Find a way to turn strength to or from weakness\n- Devise a plan to deal with a problem\n- Realize a useful truth about a situation\n\nFlip to get a hit."
      },
      "back": {
        "name": "Wits",
        "description": "//\"When I said people were gullible, I didn't mean me too!\" -- Basler\nNo battle plan survives contact with the enemy, but not all planners are humble enough to realize that. Getting by on the world can sometimes mean exploiting people, or seeming like you're doing so.\n\n- Misjudge the strength of your position\n- Overplay your hand\n- Make someone else pay for your victory\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "location": null
    },
    {
      "uid": "239c5d23fbd8d195a10b7d094521d6cd",
      "name": "Dreamer",
      "front": {
        "name": "Dreamer",
        "description": "Tomorrow beckons, if you can fix today. You can't change the world alone. But you aren't, are you?\n- Remind someone of their best self\n- Light a candle to spite the darkness\n- Defy what's possible with what's necessary\n\nFlip to get a hit."
      },
      "back": {
        "name": "Dreamer",
        "description": "When the gulf between is and ought becomes too much, which will you choose?\n- Reject the real, denounce the realist\n- Forget that you have friends\n- Lose sight of your dream for a time\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "35920d589e15e79fa4778dc2d8d9aa52",
      "name": "Guardian",
      "front": {
        "name": "Guardian",
        "description": "You feel responsible for something or someone else. Their need propels you.\n- Keep your charge safe from something\n- Identify and monitor a threat\n- Endure the unimaginable\n\nFlip to get a hit."
      },
      "back": {
        "name": "Guardian",
        "description": "You control that which depends on you, and sometimes the weight grows too much.\n- Assert your authority\n- Cast suspicion too widely\n- Shut down your feelings or shut out your charge\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "febc8909408140d3e9ae4bda7d038321",
      "name": "Opportunist",
      "front": {
        "name": "Opportunist",
        "description": "Life is unpredictable. When an opening comes, seize it. When a chance comes, take it.\n- Exploit or create a weakness\n- Employ misdirection or deception\n- Take a risk nobody else would\n\nFlip to get a hit."
      },
      "back": {
        "name": "Opportunist",
        "description": "There's only so much good luck to go around. Will you run out of yours, or take someone else's away?\n- Kick someone when they're down\n- Betray a trust\n- Let someone else pay the price\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "1b0a8537b6450a76a367c7a4588b624b",
      "name": "Performer",
      "front": {
        "name": "Performer",
        "description": "Through actions and words, you entertain, persuade, or transform people around you.\n- Embody grace, confidence, or poise\n- Inspire or incite people to act\n- Spark or manipulate emotion\n\nFlip to get a hit."
      },
      "back": {
        "name": "Performer",
        "description": "When anything you say matters, will you say the wrong thing, or for the wrong reasons?\n- Outshine or embarrass someone important\n- Draw unwanted attention\n- Provoke an unintended reaction\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "ac1e9d3e575874ff6d50a04640d355b2",
      "name": "Quester",
      "front": {
        "name": "Quester",
        "description": "A vow, an ideal, a promise, a vision, a mission. Something drives you unstoppably onward.\n- Make the hard choices your resolve demands\n- Rally others to your cause\n- Find a way forward despite everything\n\nFlip to get a hit."
      },
      "back": {
        "name": "Quester",
        "description": "That which is greater than you can also crush you beneath it.\n- Waver in your dedication to your quest\n- Shut others out of assisting you\n- Ignore mundane needs to focus on your quest\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "a552732d05e0f657f595071f7617f59b",
      "name": "Rebel",
      "front": {
        "name": "Rebel",
        "description": "Your power, presentation, reputation, or history cause common folk to fear or reject you.\n- Use others' fears to your advantage\n- Surpass a limit or break a rule imposed by others\n- Make common cause with other rebels\n\nFlip to get a hit."
      },
      "back": {
        "name": "Rebel",
        "description": "To be the worst of what they say you are. How easy to do it accidentally. How tempting to choose it.\n- Make everything worse for yourself or an ally\n- Fall prey to temptation or darkness\n- Spark conflict or dissent\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "19dc271a64f0a13f3d261db2d54ec5db",
      "name": "Soldier",
      "front": {
        "name": "Soldier",
        "description": "Life is struggle. Everyone has to fight, all the time. What do you fight for?\n- Test your fate against an opponent\n- Make a sacrifice to turn the tide\n- Stand up when everything says to stay down\n\nFlip to get a hit."
      },
      "back": {
        "name": "Soldier",
        "description": "Life is pain. There's no reward for this, only the next battle. When will you fall?\n- Lash out at an easy target\n- Use your power selfishly\n- Dismiss the peaceful alternative\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "3e76af1b4be2e0cb9eefdf4b52347c61",
      "name": "Synthesist",
      "front": {
        "name": "Synthesist",
        "description": "You create, fix, and remix.\n- Make something new out of what's available\n- Repair or recreate something\n- Bring creativity to bear against a problem\n\nFlip to get a hit."
      },
      "back": {
        "name": "Synthesist",
        "description": "What or who will you unmake, in your goal of making something new?\n- Tear down something valuable or important\n- Keep something going at great cost\n- Overuse the same solution\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "4e787313e1b02b79c6d4a079b5b42258",
      "location": null
    },
    {
      "uid": "9cb6a3e675a077d4364cf8e92685624f",
      "name": "Cosmopolitan",
      "front": {
        "name": "Cosmopolitan",
        "description": "//\"The clear skies, the lure of the open road, it's perfect!\" -- Tana\nYou've lived your life among people from all over. Maybe you lived in a bustling city, or maybe you traveled the world. You listened to their stories and saw their ways of living.\nYou've learned to approach situations by understanding many perspectives.\n\n- Recall a story that inspires people to new ways of thinking\n- Bring a fresh perspective to a situation\n- Unite people by finding the common threads between them\n\nFlip to get a hit."
      },
      "back": {
        "name": "Cosmopolitan",
        "description": "//\"Do these wagon wheels fall off often?\" -- Emory\nIt's possible to mistake your breadth of experience for depth, and fail to hear wiser voices. Similarly, you can make false assumptions about a culture based on experience with a few of its individuals. There's always more to learn. There's always a new perspective.\n\n- Overestimate your own wisdom or experience\n- Lose focus of people as individuals\n- Treat one person as representative of a whole group\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "8be317a818e5f987da2e061681e1f720",
      "name": "Industrious",
      "front": {
        "name": "Industrious",
        "description": "//\"Take a deep breath of that farm air!\" -- Tana\nYou grew up among farmers, trappers, city laborers, or other folk who made their way by the sweat of their brow. Others expected you to carry your own weight. Life could be routine, and you learned ways to pass the time.\nYou've learned to approach situations with direct, hard work.\n\n- Be sensitive to the rhythms around you--cycles of nature, or people's routines\n- Make do with what's on hand\n- Coordinate with others to get hard work done\n\nFlip to get a hit."
      },
      "back": {
        "name": "Industrious",
        "description": "//\"Smells like cow breakfast\" -- Basler\nNot everyone appreciates the necessity of hard work. But sometimes, just plowing through isn't the right answer either. You're used to getting down in the mud, but it's important to reach for the stars as well.\n\n- Work harder, not smarter\n- Sacrifice tomorrow's hopes for today's needs\n- Lay a heavy burden on light shoulders\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "f18de9be57b229cca721a7bc85d12438",
      "name": "Insular",
      "front": {
        "name": "Insular",
        "description": "//\"This is all very different from the cloister\" -- Emory\nYou grew up secluded from the rest of the world. Whether you lived on a lonely mountain village, a religious retreat, or in an enclave within a city, the ways of the outside world are a mystery.\nYou've learned to approach situations through curiosity.\n\n- Solve a problem using your peoples' ways\n- Ask naive but insightful questions\n- Reveal hidden knowledge or exclusive experience\n\nFlip to get a hit."
      },
      "back": {
        "name": "Insular",
        "description": "//\"Everything's different out here. That's why it's called a cloister\" -- Basler\nYour early life didn't prepare you for the sheer variey of people and things the world has to offer. You might make a basic blunder, or ask a troubling question. When in doubt, there might be someone you rely on for answers, or you may rely on your upbringing's incomplete picture of things.\n\n- Violate unspoken rules or cultural taboos\n- Cause conflict through misunderstanding\n- Fall back on a trusted authority\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "952c52fc248ab3b3b837684c8bb48343",
      "name": "Mercantile",
      "front": {
        "name": "Mercantile",
        "description": "//\"Welcome to the Labri Market! You can find anything here.\" -- Basler\nYou grew up among those who made their living through trade. This could be the busy markets of a city, an oceanic trade route, or the corridors of power in an embassy or castle. You understand that some people have wants or needs, that others can satisfy them, and the power that comes from mediating between the two.\nYou've learned to approach situations through canny negotiation.\n\n- Make a deal or haggle over details\n- Navigate a complex or ambiguous situation\n- Gauge someone's wants or needs\n\nFlip to get a hit."
      },
      "back": {
        "name": "Mercantile",
        "description": "//\"...For the right price.\" -- Basler\nNot everything can be reduced to a simple transaction, but some people can't see any other way. It becomes easy to ignore pain and devalue life when money or power becomes a cocoon against existence.\n\n- Compromise a principle or ideal for expedience\n- Overcomplicate a plan or solution\n- Value people as commodities rather than individuals with thoughts and feelings\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "a932d3137353340fcee15f93bfd00307",
      "name": "Solitary",
      "front": {
        "name": "Solitary",
        "description": "//\"I got this, leave me alone\" -- Woody\nFor much of your life, you've been on your own. You might have been orphaned or abandoned or kidnapped. You might have run away from home, or home might no longer exist.\nYou've learned to approach situations through isolation.\n\n- Shut out distractions\n- Present a reassuring facade\n- Keep moving even when hope is lost\n\nFlip to get a hit."
      },
      "back": {
        "name": "Solitary",
        "description": "//\"You've left yourself alone too long\" -- Tana\nWithout experiencing what other people in your life can do, you may fear what you need most from them: an outlet. When you act distant, others will reciprocate.\n\n- Accumulate emotional debt\n- Keep your reservations unspoken\n- Leave others behind to fend for themselves\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "9a40dafa53fe4d9b14e2c46b1c6dd59d",
      "name": "Strict",
      "front": {
        "name": "Strict",
        "description": "//\"Knights should be glorious champions of honor!\" -- Emory\nYou knew from a young age that there's a right and wrong way to do things. You might be from a noble family where things are done just so, or your parents might have lived in constant fear of something, and their caution rubbed off on you.\nYou've learned to approach situations through protocol.\n\n- Uphold a code of behavior in the face of doubt or weakness\n- Use the training or skills that led to your code's adoption\n- Inspire or counsel others using your code\n\nFlip to get a hit."
      },
      "back": {
        "name": "Strict",
        "description": "//\"As opposed to ironclad thugs lording it over the peasants?\" -- Basler\nWhile committing to a way of life gives you strength to press on, it can make people inflexible or stubborn. Some will reject anything outside their experience, while others will actively fight against it.\n\n- Refuse to adapt your code to new or difficult situations\n- See the world through a narrow lens\n- Disdain or punish those who don't conform to your expectations\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "40d0e373d92ce12e546338e1289840da",
      "name": "Underclass",
      "front": {
        "name": "Underclass",
        "description": "//\"Nobody fights for people like us. So we fight for ourselves.\" -- Basler\nYou grew up among people who were neglected or rejected by a surrounding society. Your family or neighbors could have been criminals, migrants, members of a disliked minority or species, or anything else.\nYou've learned to approach situations via pride.\n\n- Stand up for yourself and those like you\n- Rally those who question themselves\n- Obtain your needs through a social network\n\nFlip to get a hit."
      },
      "back": {
        "name": "Underclass",
        "description": "//\"When everyone hates you, it's hard not to hate them back.\" -- Basler\nSometimes, circumstances push people to a breaking point. Other times, doing the right thing becomes impossible, and you're left with doing the necessary thing.\n\n- Lash out at threats to your ego\n- Build yourself up in the eyes of the impressionable\n- Run afoul of those in power\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "8e614770cb439deb26de41002f18321f",
      "name": "Unfettered",
      "front": {
        "name": "Unfettered",
        "description": "//\"As a princess, I had power. As a ranger, I have freedom.\" -- Woody\nWhether you were a scion of privilege, a child wandering the halls of an artisan's guild, or a free spirit roaming a mystic forest, you were accustomed to going where you wished and doing whatever seemed best.\nYou've learned to approach situations through force of will.\n\n- Force an issue or break a deadlock through action\n- Reject restrictions and break chains\n- Drag others along your unique path\n\nFlip to get a hit."
      },
      "back": {
        "name": "Unfettered",
        "description": "//\"Those who go their own way often find the path lonely.\" -- Emory\nRules aren't always made to be broken. You can offend others, or even hurt them or yourself when you go where you don't belong or do what you ought not do.\n\n- Sabotage a subtle effort\n- Trample on a cherished tradition\n- Disappoint or frustrate a more cautious ally\n\nFlip when a prompt is narrated by anyone."
      },
      "flipped": false,
      "home": "cb7b37050fb00475eed11d3f943f3af7",
      "location": null
    },
    {
      "uid": "99e289f854c724adea48e00471ad5060",
      "name": "Character Cards",
      "front": {
        "name": "Character Cards",
        "description": "Cards with this icon are character cards.\nTo create a new PC, pick three cards from three different categories, e.g. Focus, Role, and Origin. You can choose cards at random, or select them yourself.\nThese cards describe a PC's most important traits, or the traits that you want to see in the spotlight during the game. Just because someone else has the Courage card doesn't mean your character isn't courageous, only that it's not going to be the quality we see most often or most plainly.\n\n- Front: get a hit by flipping the card\n- Back: flip when a prompt is narrated by anyone\n\n"
      },
      "back": {
        "name": "Character Cards",
        "description": "Cards with this icon are character cards.\nTo create a new PC, pick three cards from three different categories, e.g. Focus, Role, and Origin. You can choose cards at random, or select them yourself.\nThese cards describe a PC's most important traits, or the traits that you want to see in the spotlight during the game. Just because someone else has the Courage card doesn't mean your character isn't courageous, only that it's not going to be the quality we see most often or most plainly.\n\n- Front: get a hit by flipping the card\n- Back: flip when a prompt is narrated by anyone\n\n"
      },
      "flipped": false,
      "home": "527b736d4e0597761549380a2411ea44",
      "location": null
    },
    {
      "uid": "21cc9d674f3e6395cf9bdf67537f522b",
      "name": "Condition Cards / Condition Examples",
      "front": {
        "name": "Condition Cards",
        "description": "You've been affected by injury, delirium, debts, magical curses, or other problems.\nYou can take a condition to get a hit. Describe how. Players who challenge you can suggest conditions to meet it.\nThe condition is fictionally true and limits your actions. If you narrate an action the condition would interfere with, you must meet the challenge of the condition in addition to any other challenges.\nYou can flip a front-side condition to worsen it and get a hit. Describe how.\nClearing conditions takes time. Use this time to drive drama, build the world, or explore how you clear the condition.\nDiscard any conditions that no longer apply in the fiction.\n\n\nFlip to see examples"
      },
      "back": {
        "name": "Condition Examples",
        "description": "Conditions are a way to achieve success at a cost. You can use conditions in many ways.\n\n- You choose to take Disarmed to score a telling blow on the enemy.\n- The facilitator or another player thinks touching the idol will leave you Magicked.\n- A poisonous cloud envelops you. If you want to stay in it, meet the challenge by taking Weakened.\n- You're already Hurt, but you can worsen it to Wounded to get a hit. You attack, blood gushing from reopened wounds, and strike down your enemy before falling in a faint yourself.\n- You spend a scene being healed by a priestess to discard Hurt. You wanted to talk to her anyway, about...\n- You spend a week of downtime doing odd jobs to pay off Indebted. During that time, you listen for new adventure opportunities.\n\nFlip to see rules"
      },
      "flipped": false,
      "home": "527b736d4e0597761549380a2411ea44",
      "location": null
    },
    {
      "uid": "c592b70984961febd1090f8d8860f006",
      "name": "Hurt / Wounded",
      "front": {
        "name": "Hurt",
        "description": "//\"Ow! Watch who you carve up with that thing!\" -- Basler\nYou've been bloodied, bruised, stunned, or suffered some other temporary physical harm.\nYou can't exert yourself too much without making it worse. Enemies can target existing sites of injury as well.\nDo you have access to healing magic and potions, or just bandages and first aid? Who treats your injuries?\n\n- An enemy successfully attacked you\n- An animal or monster mauled you\n- You were in the path of something heavy and damaging\n- You were in the middle of a natural disaster or large-scale magical attack\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Wounded",
        "description": "//\"It's...just a scratch...\" -- Emory\nYou've been seriously injured. You might pass out if you aren't helped soon. Every step is painful, and it's hard to concentrate.\nYou can't move very fast or fight effectively. Someone might also exploit your condition.\nWhere do you stay while recuperating? Under whose care? What special measures must be taken? Do you retain scars?\n\n- You suffered significant blood loss\n- You have broken or twisted limbs\n- You were pierced by arrows, spears, or claws\n- You reopened your wounds while fighting\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "e4ebef82dd28c43d8bddc4ebf017c327",
      "name": "Weakened / Exhausted",
      "front": {
        "name": "Weakened",
        "description": "//\"This forest goes on forever, Woody. Can we just stop a moment?\" -- Tana\nYour body is trying to keep itself going, but is under attack or is being deprived.\nYou can't push yourself too hard, and it's hard to concentrate.\nDo you need shelter, medicine, food and water, or just sleep? What are your symptoms? Is there anything you take to ease them? Did you hide them to press on?\n\n- Fatigue or forced marches\n- Sleep deprivation or nightmares\n- Hunger and thirst\n- Poison, disease, or infection\n- Exposure to the elements\n- Fever or chills\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Exhausted",
        "description": "//\"The leaf dragon's toxin got me... Sorry...\" -- Woody\nYour body is out of resources. You pushed yourself to a breaking point.\nYou can't fight effectively. Each new step is an effort. Focusing on anything other than survival is difficult.\nWhere do you recover? At what cost? Do you experience dreams or delirium? What rare ingredient does your medicine require?\n\n- Extended lack of sleep\n- Starvation or dehydration\n- Serious illness or poison\n- Delerium or hallucinations\n- Burns or frostbite\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "be3b9d4c8db264e3c86ead7cebf97b52",
      "name": "Obliged / Indebted",
      "front": {
        "name": "Obliged",
        "description": "//\"We will deal with the brigands, your highness.\" -- Emory\nYou have a heavy responsibility, and someone is watching to make sure you uphold it. There will be consequences if you delay or decline.\nYour patron might grow impatient or demand more. Rivals or enemies might interfere. The task might need to be kept secret, lest someone be hurt.\nDo you have to fight, haggle, or steal something to make good? Do you end up making new enemies? New friends?\n\n- Deliver an item or message to someone\n- Deal with a troublesome individual or group\n- Promise a favor later for a purchase now\n- Swear a magically binding oath\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Indebted",
        "description": "//\"I kinda told the thieves' guild I'd take care of something\" -- Basler\nYou have significant debts that demand your time or attention. The stakes may be higher, or just more immediate. You may risk notoriety or condemnation.\nYour patron is watching closely and may try to threaten or coerce you further. Other interested parties or powerful forces may interfere, perhaps to stop your task or hurt your patron.\nDo you have to lay low, face the heat, go on the run? Who offers a devil's bargain to make this go away?\n\n- Get something to someone right now\n- Deal with several complex problems\n- Obtain something illegal or dangerous\n- Work with a person or group that is hated or feared\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "b67a26fc44e69cffea69179b5ec05608",
      "name": "Wanted / Pursued",
      "front": {
        "name": "Wanted",
        "description": "//\"I think they saw us.\" -- Tana\nSomeone or something powerful or dangerous is seeking you out, and you'd rather not be found.\nYou risk discovery if you present yourself to guards, spies, or allies. There might be a bounty on you, or hunters after you.\nCan you lay low, or do you need to leave the area? Who can you trust, and who would rat you out? What do you sacrifice to keep safe?\n\n- You broke the law or offended someone\n- You're in a heavily guarded area and people are suspicious\n- You've done something to attract official attention\n- You're in a dangerous animal's territory\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Pursued",
        "description": "//\"They definitely saw us!\" -- Basler\nYou are being actively hunted, by someone or something that wishes you ill.\nYou must stay hidden, disguise yourself when in the open, or take other steps to avoid attention.\nYour pursuers might have some idea about your immediate goals, and work to thwart them as well.\nWhat new discoveries does your escape lead you to? How do you change your identity or habits to escape notice? What threatens your sanctuary that's just as dangerous as your pursuers?\n\n- Wanted posters or official notices\n- Guards raised an alarm\n- You're in enemy territory or surrounded\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "56b20f4f544122f88b7ec3a1dba00bb3",
      "name": "Magicked / Cursed",
      "front": {
        "name": "Magicked",
        "description": "//\"Be careful. If anything in the forest looks edible, it's a faerie trap\" -- Woody\nA spell or other supernatural power is affecting you. It might cause discomfort, distraction, or inconvenience. Your perceptions might be twisted somehow.\nYou must be careful when doing things that would set off the spell.\nWhat weird rituals or strange ingredients diminish or slow the effects on you? What obnoxious compulsions or taboos does it force on you? What price must you pay to free yourself?\n\n- Charms, illusions, delusions, and deceptions\n- Magical prohibitions against entering or leaving a place\n- Vexing problems, bad luck, or other trickery\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Cursed",
        "description": "//\"That berry was delicious. Hey, who are all of you?\" -- Emory\nA powerful and baneful magic has you in its grip. You might be under a geas or other powerful compulsion, to act or not act in a certain way.\nThe rules of the curse may be a mystery. You may suffer pain or great misfortune violating them.\nWhat quest does lifting the curse entail? What sacrifices or dangers do you brave to undo it? Must someone else pay a price on your behalf?\n\n- Ill fortune or calamity follows you\n- A taboo against doing some common thing\n- Love potions, gibberish speech, or other maledictions\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "aae3bd917d7e6f77176f0dd6c2df16e6",
      "name": "Altered / Transformed",
      "front": {
        "name": "Altered",
        "description": "//\"Don't let them peck you, or you'll croak with the voice of the Raven God\" -- Woody\nPowerful magic has physically changed your appearance or abilities. Your new features might be helpful in limited ways, but mostly they're a hindrance.\nYou'll have trouble doing things you took for granted, or draw attention to yourself if seen.\nWhat's the worst side effect of the change? What mystic ingredient or substance can hold the change at bay, or undo it? Who looks at you funny, and what might they do next?\n\n- Animal traits like tails, claws, or scales\n- Limbs or extremities turned to stone or plant life\n- Physically marked with supernatural quirks\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Transformed",
        "description": "//\"Hey, that raven looks familiar... Basler?!\" -- Tana\nYou've been physically remade into something new by powerful magic. You can still function, but it's a big adjustment.\nOther people may react with fear, curiosity, or hostility. You may be unable to speak or explain yourself to them.\nWho or what could undo the magic that holds you? What must you do, obtain, or discard to return to your former self? Who now hates or hunts you?\n\n- Polymorphed into an animal\n- Changed into a supernatural creature\n- Made undead or demonic\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "f7f780c0bb9fc2992b93b8a7f106603a",
      "name": "Undergeared / Ungeared",
      "front": {
        "name": "Undergeared",
        "description": "//\"This is the last of our fresh water.\" -- Woody\nVital gear has been damaged, or resources are running low.\nYou might have lost something and been forced to make do. You can't overuse what you have, lest things get worse. You might need to ration what you have.\nWhat have you lost that's hardest to live without? Can you use some ingenuity to get by with whatever's left, or what you can scrounge? Who in the area has a replacement, and what do they want for it?\n\n- Blunted or broken weapons, low on arrows\n- Damaged or partial armor\n- Malfunctioning magical tools\n- Lacking food, water, or medicine\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Ungeared",
        "description": "//\"The flood washed away our campsite! Now what?\" -- Basler\nYour gear has been broken, lost, or taken, or you are out of some important resource.\nYou must scavenge for substitutes, or make do with barely-adequate improvisations. If you lack basic necessities like food, you must hunt for them soon.\nWhere must you go to get what you need? Who has it, and what do they demand for it? How do you change habits or tactics to deal with the problems cause by what you lack?\n\n- Equipment lost in floods or other calamity\n- Stripped of weapons by enemies\n- Magical tools disenchanted\n- Completely without rations or shelter\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "952c2265e42852cb7968931a46938c6a",
      "name": "Hindered / Impeded",
      "front": {
        "name": "Hindered",
        "description": "//\"This arm is useless for drawing a bow right now.\" -- Woody\nYour body, mind, or senses are in temporary disorder. You might have overtaxed yourself, or suffered from injury or stress. You may be in the grip of a powerful or magically-caused emotion.\nYou will have trouble using affected abilities, making rational decisions, or spotting important clues or danger signs.\nWho fixes you up so you can at least keep going? How do they help, and what does it take? What support do you now need from those around you?\n\n- Injured limbs or impaired mobility\n- Blurred vision, ringing ears, or dizziness\n- Serious shock or mental disturbance\n- Powerful anger, grief, sadness, or anxiety\n\nFlip to worsen the condition and get a hit. Discard by spending a scene attending to the condition."
      },
      "back": {
        "name": "Impeded",
        "description": "//\"I can't feel the grimoire! I can't feel ANY magic!\" -- Tana\nA sense or faculty you normally depend on has been temporarily lost. You might have pushed yourself past a limit, or been affected by a disease or magical effect.\nYou are unable to use the affected abilities. If your mind or senses are affected, you may make important mistakes in judgement.\nWhat changes for you, physically or emotionally? What new understanding do you gain? Do you try to go back to how you were, or go forward to something new?\n\n- Temporarily blind, deaf, or mute\n- Unable to cast spells or use other special abilities\n- Suffering a breakdown or phobia\n\nDiscard by spending downtime attending to the condition."
      },
      "flipped": false,
      "home": "9576eca347487ea0bad60662ede3958b",
      "location": null
    },
    {
      "uid": "080602b212763fd203a5e2c94845ebc7",
      "name": "Armored",
      "front": {
        "name": "Armored",
        "description": "//\"My daggers bounced off that plate mail! What now?\" -- Basler\nThis encounter includes something important that is heavily defended.\nThis could mean body armor of leather or metal, hardened barriers of stone, or wood, a protective aura of magic, a divine blessing, or something else.\nYou may be challenged if you try to penetrate or circumvent the armor to get to what's inside.\nSomething armored may:\n\n- Ignore harm from typical weapons or other sources of damage\n- Destroy weaker things that strike it or are struck by it\n- Protect unarmored allies\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Armored",
        "description": "//\"You know what metal does? Heats up. Fireball!\" -- Tana\nEvery armor has a weakness or comes at a cost, like making someone slower or something heavier. Some armor has weak spots or is vulnerable to a specific attack. Armor can also suffer if not regularly maintained.\nYou can confront an Armored obstacle without a challenge if you can find and exploit one of these weaknesses.\nSomething armored may:\n\n- Have limited senses that can be exploited by nimble, stealthy, or evasive opponents\n- Be forced to shed the armor if it's heated, if they sink, etc.\n- Be susceptible to area-effect attacks or those of a particular type (magic, psychic, electric, etc.)\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "f0cc8e045872084b96529d5043bba035",
      "name": "Base",
      "front": {
        "name": "Base",
        "description": "//\"Aheheh.. We come in peace?\" -- Basler\nThe encounter includes a place where creatures stay for a common purpose.\nA Base can be a temporary encampment, an outpost, a secret headquarters, a wild animal's den, or some other protected space.\nYou may be challenged if you try to find something specific in the base, find your way out or through, or confront its occupants and their preparations.\nA Base may:\n\n- Bristle with defenders\n- Defy intrusion with traps, labyrinthine structure, or other clever preparations\n- Enable its defenders to cut off escape routes or easily give chase\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Base",
        "description": "//\"Next time, I'll let my sword do the talking.\" -- Emory\nWhile Bases can be big and imposing, their nature can work against their occupants.\nTents, side-passages, stacked crates, and many other things can help a character even the odds. Camps have a lot of supplies that can be looted or bargained for.\nA Base may:\n\n- House something you're looking for, or something unexpected that can help you\n- Rely on infrastructure that can be destroyed or disrupted\n- Give up secrets about the plans and activities of its occupants\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "6becdcd936719ceb0a9e5318062a85ca",
      "name": "Diabolical",
      "front": {
        "name": "Diabolical",
        "description": "//\"Back, foul fiend! Light will overcome you!\" -- Emory\nA Diabolical encounter has the touch of evil. An actual summoned demon, a possessed victim, or a dark and malevolent force are all Diabolic.\nYou may be challenged if you engage with the Diabolical without proper protections or if you unknowingly encounter its influence.\nA Diabolical encounter may:\n\n- Seek to corrupt or influence the vulnerable\n- Exploit moral weaknesses or dark secrets\n- Expose its true nature and hellish powers\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Diabolical",
        "description": "//\"Basler, stop cringing. He's not talking about you.\" -- Woody\nEvil hasn't won, though it keeps trying. Powers from beyond are bound by their own rules too, and can be defeated accordingly.\nCharacters who arm themselves with occult lore or divine blessings may circumvent or neutralize a Diabolical power.\nA Diabolical encounter may:\n\n- Be susceptible to folk incantations or rituals\n- Recoil from the pure of heart\n- Flee to fight another day\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "6d631ebef3a2bc36a1549adabcde4776",
      "name": "Elemental",
      "front": {
        "name": "Elemental",
        "description": "//\"Earth sprites. They have the ore we seek.\" -- Tana\nThis encounter involves powerful elemental forces. This can mean creatures made of such forces, or dangerous sources like a volcano or a violent storm.\nYou may be challenged by the raw power of an Elemental threat, or it can cause environmental dangers or obstacles.\nAn Elemental power may:\n\n- Create, animate, or manipulate its element in useful or dangerous ways\n- Change the environment with aspects of its element, such as making rivers of fire or barriers of wind\n- Control or manipulate its element, even inside complex or living things, like the metal in electronics or the water in blood\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Elemental",
        "description": "//\"They had some nice gemstones too!\" -- Basler\nThe elements represent a complex system with rules that can be exploited.\nEach element is usually weak to another element, such as fire being weak to water. Elements are also bound to their natures. Fire needs some sort of fuel to persist, for example.     \nYou can weaken or neutralize an Elemental threat by exploiting its vulnerabilities or using its nature against it.\nElemental threats may:\n\n- Be vulnerable to their element's normal vulnerabilities or rules\n- Require a nearby source of the element to control, or just to survive\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "a58adcc9f5356bd1808382037c082573",
      "name": "Flying",
      "front": {
        "name": "Flying",
        "description": "//\"Did something just swoop overhead?\" -- Emory\nThis encounter includes an important aspect that can fly or is otherwise airborne.\nWinged creatures, skilled magicians, and others can fly. Floating platforms, mischievous winds, and more can keep important assets or dangers aloft.\nYou may be challenged when a flying threat holds your object out of reach, or when you try to affect something in the sky.\nFlying threats may:\n\n- Strike targets on the ground without risking counterattacks\n- Move faster than those trapped on the ground, or reach places they can't\n- See greater distances or from better angles\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Flying",
        "description": "//\"Meet my best girl, Annette! A net, get it?\" -- Basler\nWings require lots of energy to sustain flight, and are often fragile. Magical or elemental sources of flight can be counter-spelled or negated. Turbulent air can thwart flyers, forcing them to ground, where they might be vulnerable.\nYou may avoid the challenge of a flyer by disturbing its source of flight or forcing it into situations where its flight won't help.\nFlying threats may:\n\n- Become entangled, trapped, or confined in ways that negate flight\n- Be unable to lift heavy loads or fly under difficult conditions\n- Suffer great harm if they fall a great distance\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "dab9c8d34df72081d23dbcdd39ec1d5c",
      "name": "Gang",
      "front": {
        "name": "Gang",
        "description": "//\"They outnumber us 5 to 1, folks!\" -- Basler\nThis encounter includes a group of people or creatures bound together in common purpose.\nGangs can be organized, like criminal gangs or military units, or they can be informal groups, like angry mobs or startled herds of animals.\nYou may be challenged by a Gang's numerical advantage, or by its planning and influence.\nA Gang may:\n\n- Surround or isolate individuals through strength in numbers\n- Shout down or bully a lone voice\n- Bring a variety of skills or resources to bear on a problem\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Gang",
        "description": "//\"Sounds like fair odds to me. Have at you!\" -- Emory\nThe strength of a gang is in its numbers. Dealing with individual members can be very different from confronting the gang as a whole.\nWhile an assembled gang acts instinctively, individuals can be made to consider actions more carefully.\nYou may avoid or circumvent the challenge of a gang by disrupting the group, or by addressing individual members.\nA Gang may:\n\n- Have competing impulses or mixed sympathies or agendas\n- Fall apart if a leader is weakened or shamed\n- Follow a new leader or impulse that better matches its agenda\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "f071fd22979e19753838e1d93747d5e8",
      "name": "Hybrid",
      "front": {
        "name": "Hybrid",
        "description": "//\"A Gryphon. The heraldic symbol of my kingdom. Majestic!\" -- Emory\nA Hybrid being is made up of two or more things, not always living.\nSuch beings can be part-human (mermaids, harpies), mixed animal (cockatrices, pegasi), shapeshifters (werewolves), or weirder (tree-ogres).\nA Hybrid may pose a challenge if characters are unfamiliar with the combination.\nHybrid beings may:\n\n- Use the best of their combined abilities\n- Use different abilities together in some unique way\n- Reveal a surprising new ability\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Hybrid",
        "description": "//\"That thing was terrifying! Your kingdom is messed up!\" -- Basler\nNot every hybrid has a perfect command of its own nature. Hybrids must also obey the rules of all their component parts.\nA Hybrid may not pose a challenge if the characters exploit its weaknesses.\nHybrid beings may:\n\n- Suffer the vulnerabilities of any of their contributing parts\n- Become confused by conflicting impulses or instincts\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "b8373e85914112febe4fa242b6fa0ec6",
      "name": "Large",
      "front": {
        "name": "Large",
        "description": "//\"The bigger they are, the harder they fall!\" -- Tana\nThis encounter includes something of enormous size. It might be naturally large, like a dragon or a giant, or have been enlarged by magic or other forces.\nYou may be challenged if you can't overcome your diminutive size relative to a Large threat.\nA Large threat may:\n\n- Resist human-scale attacks or effects\n- Reach or hit an entire area at once\n- Deal devastating damage to smaller creatures and objects\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Large",
        "description": "//\"Just as long as it doesn't fall on us.\" -- Basler\nYou may have trouble engaging with a Large encounter due to the size difference, but that trouble goes both ways. It can be hard for Large things to perceive or target smaller foes.\nYou may counter the challenge of a Large encounter by  exploiting your respective sizes somehow.\nA Large threat may:\n\n- Lose track of small details or targets\n- Be easily targeted due to its size\n- Move slowly or clumsily\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "11421e213aaac827a832bdd3c8545596",
      "name": "Monstrous",
      "front": {
        "name": "Monstrous",
        "description": "//\"That ain't no ordinary wolf, folks..\" -- Basler\nMonstrous threats are altered forms of the familiar. They are fiercer, more feral, or disturbingly unnatural.\nThe characteristics of a mundane thing become exaggerated and gruesome. Muscles knot and bulge. Jaws elongate and bristle with vicious fangs. Hide thickens and goes patchy. All is as seen through the lens of nightmare.\nYou may be challenged by a Monstrous threat's adaptations, or by its relentless aggression.\nMonstrous threats can:\n\n- Lash out viciously\n- Use their adaptions to overwhelm the unprepared\n- Terrify onlookers with their awful nature\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Monstrous",
        "description": "//\"Whoever corrupted this creature will pay. Let's press on.\" -- Woody\nA Monstrous threat is powered by its rage or aggression, but those can be its downfall as well.\nMonstrous creatures often lack a sense of self-preservation, fighting relentlessly when others would retreat.\nYou may avoid the challenge of a Monstrous threat by taking advantage of its twisted, feral nature.\nMonstrous threats may:\n\n- Lose themselves in their own ferocity\n- Fall into traps when skillfully goaded\n- Misunderstand those not driven by similar instincts\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "58dbe95b83c6f4af51230b0ef152a766",
      "name": "Notorious",
      "front": {
        "name": "Notorious",
        "description": "//\"That's Gretamaw, the Beaked Butcher!\" -- Basler\nThis encounter includes someone or something that bards sing about.\nA Notorious monster whispered of by fearful villagers. A place of power that most folks avoid. An artifact of legend, replete with arcane power. A person known for great or terrible deeds.\nYou may be challenged by the weight of Notorious reputation, by those who follow or worship it, or by the very power that made it famous.\nNotorious things may:\n\n- Impress or intimidate you with their presence\n- Live up to the legend in a big way\n- Reveal some unexpected or unreported ability\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Notorious",
        "description": "//\"Save the beak. We need it to claim the reward!\" -- Basler\nFame has its price.\nIf the stories that have gotten around are accurate, you might know how to take on this encounter - maybe.\nSometimes tales are false, and notorious things prove to be very different than you expect.\nYou may avoid the challenge of a Notorious threat when you correctly leverage its lore, or when you look at it with fresh eyes and discover the truth behind the stories. \nNotorious threats may:\n\n- Behave or react just as the legends say\n- Draw unwanted attention to themselves in the region\n- Hold a deeper, unsung truth\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "3ac70e8f4ecb81713364a79277980e6b",
      "name": "Portentous",
      "front": {
        "name": "Portentous",
        "description": "//\"Where are all those crows going?\" -- Tana\nThis encounter foreshadows something important. It can be a mystical experience, laden with dreams and prophecy, or just a mundane glimpse into a momentous reality beyond.\nOminous encounters not only foretell change, but confront a character with a question: are you ready for what comes next?\nPortentous encounters may:\n\n- Give a taste of things to come\n- Force people into hard moral or personal choices\n- Subtly mingle the mundane and the symbolic or dreamlike\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Portentous",
        "description": "//\"They're going the same way we are. Come on.\" -- Woody\nThe Portentous is the first step on a larger road. It both surprises characters, and prepares them for what is next.\nYou may avoid the challenge of Portentous encounters by meeting the future they suggest with your eyes open.\nPortentous encounters may:\n\n- Reveal an important clue or suggest a strategy\n- Unlock a hidden strength or personal conviction\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "40513c030287ad26f95676ba88501313",
      "name": "Spectral",
      "front": {
        "name": "Spectral",
        "description": "//\"My arrows go right through it.\" -- Woody\nThis encounter includes something ghostly or purely spiritual.\nSpectral entities might have obligations or passions binding them to the mortal world. They may be frightened, angry, or confused. They might wish to go - or stay.\nYou may be challenged by a Spectral threat if you can't interact with it, or if its otherworldly nature has dangerous effects.\nA Spectral threat may:\n\n- Pass through solid matter or people\n- Wield morbid magics like chilling touch or possession\n- Ravenously pursue something the living have that it wants\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Spectral",
        "description": "//\"I'll have a magic circle up in a moment!\" -- Tana\nSpectral beings came to the waking world for a reason, whether for mischief, malice, or other needs. The bonds holding them to life are tenuous, and if they're given what they want, or can no longer get it, they might be forced back.\nSpectral encounter may not pose a challenge if their objective is obtained, threatened, or destroyed. A Spectral threat may:\n\n- Be forced back into the other world by applying arcane lore\n- Be weakened or repulsed by warding rituals\n- Make a compromise to achieve its objective\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "f660f24f72c5ffd8f6b09593bea31d3e",
      "name": "Tense",
      "front": {
        "name": "Tense",
        "description": "//\"Deep breaths. Stay calm. Show them we're friends.\" -- Tana\nThe encounter includes a highly charged situation that affects some or all of the beings present.\nMaybe someone expects something momentous to happen at any moment. Maybe two or more parties are on the verge of taking drastic action.\nYou may be challenged to navigate a Tense situation without making it blow up, or losing an important opportunity. \nBeings in a Tense situation may:\n\n- Lash out with ill-considered action\n- Make bad assessments or assume the worst\n- Heedlessly run away, often making things worse\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Tense",
        "description": "//\"You mean the real villain all this time was...?!\" -- Emory\nIf you discover the reason for a Tense situation, you can often find ways to diffuse things.\nIf you don't get caught up in the tension, maybe you can talk the others down, or pacify them.\nYou may avoid the challenge of a Tense situation by getting all the facts and making careful choices in your approach.\nBeings in a Tense situation may:\n\n- Hold the key to a secret or a misunderstanding\n- Exchange their trust for support\n- Overlook past beliefs and opinions in the stress of the moment\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "6ba7eceb30e524f4e7ab7098b7c61ef3",
      "name": "Toxic",
      "front": {
        "name": "Toxic",
        "description": "//\"Don't let it touch you! Your skin will rot away!\" -- Woody\nThis encounter includes something that can poison you.\nVenomous creatures, assassins with poisoned blades,  swamp gasses, and many other things can afflict you with sickness. Poisons can be fast acting and deadly, or gradually debilitating. \nYou may be challenged to engage the toxic things without getting infected.\nA Toxic threat may:\n\n- Sicken anyone in contact with them\n- Fend off an attack with the threat of toxin\n- Deliberately attack with the poison\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Toxic",
        "description": "//\"My arrows can fly farther than its spit.\" -- Woody\nPoison is not selective. It will harm anyone, friend or foe.\nSome toxins have antidotes, or may not penetrate some kinds of defense. For example, a snake's fangs might be deflected by armor.\nYou may avoid the challenge of a Toxic threat if you discover its secrets or thwart its method of delivery.\nA Toxic threat may:\n\n- Inadvertently harm allies, or themselves if they are not immune\n- Be unable to deliver its poison if you find adequate protection\n- Fail to harm something or someone with a natural or acquired immunity\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "3d1a4f2fb2af68b637f93ee0c0638cce",
      "name": "Undead",
      "front": {
        "name": "Undead",
        "description": "//\"This unholy abomination will fall!\" -- Emory\nNecromancy, curses, or strange phenomena can bring a deceased creature back to a false life. The being is sustained by magic, not biology. Some undead are mindless; others are disturbingly cunning. They are frightening reminders of mortality, often endowed with dread powers.\nYou may be challenged when you confront the undead using the  same tactics you would use against mortal foes.\nAn Undead threat may:\n\n- Ignore attacks or effects that target life force\n- Sustain more damage than normal before being defeated\n- Infect those they harm with a plague or sickness\n\nFlip to see ways to meet the encounter's challenges."
      },
      "back": {
        "name": "Undead",
        "description": "//\"Not so much fell as fell apart...\" -- Basler\nBeing sustained by dark magic, the undead are equally vulnerable to it.\nMany cannot abide holy objects, places, or effects. Others are bound by orders to only guard a certain place, or do a certain thing.\nYou can avoid the challenge of an Undead threat if you learn what raised them and why, and use that knowledge to outsmart or dispel them.\nAn Undead threat may:\n\n- Weaken or expire in the presence of the sacred or the pure\n- Fall prey to tricks or traps a thinking being could avoid\n- Have limitations its creator didn't anticipate\n\nFlip to see ways the encounter challenges the PCs."
      },
      "flipped": false,
      "home": "9c554a0573c474b0c94434978d6f2eaa",
      "location": null
    },
    {
      "uid": "c5b6f1271b603b663e5e45ac4f18dac9",
      "name": "Random Outcome / Hit",
      "front": {
        "name": "Random Outcome",
        "description": "You can choose to draw a card of this type to see if you meet a challenge.\nThe card will suggest ways in which the challenge was met. You can use one of these, or make up your own.\nIf a card indicates that you missed, you may not try to meet the challenge in other ways.\nA GM or other facilitator may adjust the ratio of hit or miss cards in this stack to reflect the difficulty of a given action.\n\n\nDraw a random card from this stack"
      },
      "back": {
        "name": "Hit",
        "description": "You successfully met the challenge! Narrate how it happened.\n\n- Luck or coincidence made it work somehow\n- You were carrying the right item at the right moment\n- Allies intervened in your favor\n- An important lesson from your past came to mind\n\nDiscard to generate a hit"
      },
      "flipped": false,
      "home": "648f0b8328bde403506928372556026e",
      "location": null
    },
    {
      "uid": "672da4c7af6e1d9dc22c8b109c9d4262",
      "name": "Random Outcome / Miss",
      "front": {
        "name": "Random Outcome",
        "description": "You can choose to draw a card of this type to see if you meet a challenge.\nThe card will suggest ways in which the challenge was met. You can use one of these, or make up your own.\nIf a card indicates that you missed, you may not try to meet the challenge in other ways.\nA GM or other facilitator may adjust the ratio of hit or miss cards in this stack to reflect the difficulty of a given action.\n\n\nDraw a random card from this stack"
      },
      "back": {
        "name": "Miss",
        "description": "You failed to meet the challenge! Narrate how it happened.\n\n- Bad luck or unhappy coincidence\n- Your equipment failed or you left something behind\n- Allies were thwarted, absent, or ineffective\n- Overconfidence sabotaged your success\n\nDiscard this card"
      },
      "flipped": false,
      "home": "648f0b8328bde403506928372556026e",
      "location": null
    },
    {
      "uid": "c1af8a4dea0f91f3c2077e17b1ab726b",
      "name": "Emotion / Ecstacy",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Ecstacy",
        "description": "Ecstacy, Joy, or Serenity.\nWith Vigilance: yields Optimism.\nWith Admiration: yields Love.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "18d91d640a54bd6820a126a83fc7bd01",
      "name": "Emotion / Admiration",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Admiration",
        "description": "Admiration, Trust, or Acceptance.\nWith Ecstacy: yields Love.\nWith Terror: yields Submission.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "71cc1c3a4b13c58512da0b26ae4cbb59",
      "name": "Emotion / Terror",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Terror",
        "description": "Terror, Fear, or Apprehension.\nWith Admiration: yields Submission.\nWith Amazement: yields Awe.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "a45fada4082946d14114b78e4fb1edf3",
      "name": "Emotion / Amazement",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Amazement",
        "description": "Amazement, Surprise, or Distraction.\nWith Terror: yields Awe.\nWith Grief: yields Disapproval.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "43fd5cfe3249440dd2869ff30f38071c",
      "name": "Emotion / Grief",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Grief",
        "description": "Grief, Sadness, or Pensiveness.\nWith Amazement: yields Disapproval.\nWith Loathing: yields Remorse.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "703ba47618cb3d4ea71bb09c723fbee2",
      "name": "Emotion / Loathing",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Loathing",
        "description": "Loathing, Disgust, or Boredom.\nWith Grief: yields Remorse.\nWith Rage: yields Contempt.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "2c37e80d8351f2078dcde97ff8649078",
      "name": "Emotion / Rage",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Rage",
        "description": "Rage, Anger, or Annoyance.\nWith Loathing: yields Contempt.\nWith Vigilance: yields Aggressiveness.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "e95a6cdd3b5a4101cbe22fb7736775a4",
      "name": "Emotion / Vigilance",
      "front": {
        "name": "Emotion",
        "description": "Oracle cards can answer questions. Draw one card for a simple answer, or two cards for a complex one.\nUse these cards to answer what someone is feeling, or what emotion a thing or event would spark.\nEach emotion has two neighbors. You can use the emotion itself, or choose to mix it with a neighbor.\n\n\nFlip to reveal an answer"
      },
      "back": {
        "name": "Vigilance",
        "description": "Vigilance, Anticipation, or Interest.\nWith Rage: yields Aggressiveness.\nWith Ecstacy: yields Optimism.\n\n\nDiscard and shuffle into related cards"
      },
      "flipped": false,
      "home": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "location": null
    },
    {
      "uid": "d77ee479306867a955563f9b9e81840e",
      "name": "Artistic",
      "front": {
        "name": "Artistic",
        "description": "mundane goods and services\n\n- TBD\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "Artistic",
        "description": "TBD\n\n- TBD\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "a19fdd4223332cf8b02b5373afb7a824",
      "name": "Criminal",
      "front": {
        "name": "Criminal",
        "description": "Two neighborhoods are connected via criminal activity. This could range from petty theft or pickpocketing, to smuggling of contraband, to intimidation or murder. Not every criminal is disliked; someone who steals from the rich to give to the poor will be popular among the poor.\nA stable Criminal dynamic often means organized crime, such as a cartel, criminal fraternity, thieves' guild, or the like.\n\n- What kinds of laws exist in the city? Which ones are being broken?\n- Who enforces those laws? Why aren't they doing so here?\n- How does the public view this criminal element, e.g. as heroes or villains?\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "Criminal",
        "description": "Two neighborhoods are connected via criminal activity. This could range from petty theft or pickpocketing, to smuggling of contraband, to intimidation or murder. Not every criminal is disliked; someone who steals from the rich to give to the poor will be popular among the poor.\nAn unstable Criminal dynamic might mean gang war between rival criminal factions. It might also mean a single leader is responsible, and they could be taken down via force or guile.\n\n- What kinds of laws exist in the city?\n- Who enforces those laws? Why aren't they doing so here?\n- How does the public view this criminal element, e.g. as heroes or villains?\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "a8e6a050c5dd5e188fde496116ed302d",
      "name": "Commercial",
      "front": {
        "name": "Commercial",
        "description": "People from one neighborhood buy or sell goods and services to the other. Advertising, word of mouth, or tradition might entice new visitors.\nA stable Commercial dynamic means there's enough to go around, or that the market is adaptable enough to come up with something new when tastes change.\n\n- Who pays whom, and for what?\n- Who benefits from the arrangement? Who suffers?\n- Who would like a piece of the action?\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "Commercial",
        "description": "People from one neighborhood in the dynamic buy or sell goods and services to the other. It might be hard to find what you're looking for, however.\nAn unstable Commercial dynamic indicates a market in flux, such as prices rapidly changing, too much supply, or too little demand. Workers might be in short supply, or customers are drying up.\n\n- Who gains from the instability? Who loses?\n- Where else can supply, demand, or labor be found instead?\n- How are people coping?\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "2616adba749367322ad6c25a535b2961",
      "name": "Esoteric",
      "front": {
        "name": "Esoteric",
        "description": "arcane goods and services\n\n- TBD\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "Esoteric",
        "description": "TBD\n\n- TBD\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "9e7c545332c371dcd92e539300da1f85",
      "name": "External",
      "front": {
        "name": "External",
        "description": "activities originating outside the city\n\n- TBD\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "External",
        "description": "TBD\n\n- TBD\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "dda94bcb93d6a5e72d7b5589044b8430",
      "name": "Financial",
      "front": {
        "name": "Financial",
        "description": "money and valuables\n\n- TBD\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "Financial",
        "description": "TBD\n\n- TBD\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "6a3062393ead4090943de93b5a6dbe15",
      "name": "Political",
      "front": {
        "name": "Political",
        "description": "Two neighborhoods interact via power, influence, and leadership. One might dominate another, depend on another for legitimacy, or prioritize or ignore that neighborhood's needs in particular.\nA stable Political dynamic means a long-standing arrangement or an entrenched situation. Enough people, or the right people, like things as they are and work to keep it that way.\n\n- Who benefits from the situation? Who suffers?\n- What keeps the relationship going?\n- How reluctant are people to acknowledge or confront the situation?\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "Political",
        "description": "Two neighborhoods interact via power, influence, and leadership. One might dominate another, depend on another for legitimacy, or prioritize or ignore that neighborhood's needs in particular.\nAn unstable Political dynamic means the power structure is collapsing, whether due to internal conflicts or outside agitation. Something's going to topple the tower of power, but who will be beneath it when it finally falls?\n\n- Who is agitating for change? Who holds the line?\n- What outside influences are present? Who do they support?\n- Is the struggle physically peaceful or violent?\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "eabc4b125eddbdb8a0e97657f7f627e1",
      "name": "Social",
      "front": {
        "name": "Social",
        "description": "Two neighborhoods play off each other via fashion or pop culture.\n\n- TBD\n\nFlip to see the unstable version of this dynamic"
      },
      "back": {
        "name": "Social",
        "description": "TBD\n\n- TBD\n\nFlip to see the stable version of this dynamic"
      },
      "flipped": false,
      "home": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "location": null
    },
    {
      "uid": "54fee950982ae0be038df188112988ab",
      "name": "The Boulevard",
      "front": {
        "name": "The Boulevard",
        "description": "A Boulevard is where the city's artistic and aesthetic offerings connect with individual citizens. Shops, eateries, arcades, and more offer visitors chances to spend their money and their time.\nA flourishing Boulevard boasts big crowds. The neighborhood attracts tourists and locals alike by offering a variety of sights, sounds, and smells.\n\n- What are some of the notable sights and attractions?\n- What sort of crowds are found here?\n- Does the crowd change due to time of day, season, etc.?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "The Boulevard",
        "description": "A Boulevard is where the city's artistic and aesthetic offerings connect with individual citizens. Something is lacking, whether a supply of attractions to experience or a demand for them from the populace.\nA struggling boulevard lacks a healthy crowd of visitors. Whether fallen from former glories, or built around a nucleus of hope and ambition, it's not giving people a reason to come right now.\n\n- How new is the Boulevard compared to the rest of the city?\n- What emotions do visitors feel when they see the state of things?\n- Is anyone trying to attract new visitors?\n- Is anyone trying to stop them?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    },
    {
      "uid": "deec1a3bd685bed814b3e30d8c74799f",
      "name": "The Harbor",
      "front": {
        "name": "The Harbor",
        "description": "A Harbor is the home of trade and travel, to and from the city. It is often a visitor's first introduction to the city. Commercial transports, whether caravans, trains, or zeppelins, are found everywhere here.\nA flourishing Harbor is the life and breath of a city. Anything people need or want that isn't obtained locally must be brought from somewhere else, and it all comes through the Harbor.\n\n- What kinds of vehicles or technology move people or cargo here?\n- What is the experience of someone coming here? Of leaving?\n- What are some of the trading partners or destinations represented here?\n- Are other cultures and their visitors mostly found here, or do they inhabit the rest of the city?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "The Harbor",
        "description": "A Harbor is the home of trade and travel, to and from the city. It is often the last sight a regretful traveler sees before leaving. Commercial transports, whether caravans, trains, or zeppelins, are uncommon or sometimes found in states of neglect.\nA struggling Harbor is doing its best to keep the city afloat. Whether conditions are bad here, or whether the city's trading partners have fallen on hard times (or abandoned it), all the neighborhood can do is keep moving whatever's left.\n\n- What kinds of transportation vehicles or technology were or are found here?\n- Did the city let its trading partners down, or the other way around?\n- What is now short supply?\n- Who could help? Why don't they?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    },
    {
      "uid": "9e046e389b1fb90d8b029decb2a1b847",
      "name": "The Marketplace",
      "front": {
        "name": "The Marketplace",
        "description": "The Marketplace is the commercial core of the city. It might include a rowdy labyrinth of vendors hawking their wares, a smoke-smothered block of forges and anvils where blacksmiths arm the soldiery. or warehouses full of grain or rice.\nA flourishing Marketplace balances supply and demand. The Marketplace produces the bulk of the city's wares, then makes them available to those with money equal to their need. If both seller and buyer exist for something, the Marketplace ensures they will eventually meet.\n\n- What goods is the neighborhood best known for?\n- What can be found here, but is unknown to most visitors?\n- Who controls what's found here?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "The Marketplace",
        "description": "The Marketplace is the commercial core of the city. The vendors may be few and far between, the fires of the forge may lie extinguished, and farmers' crops may rot in warehouses - or be taken away at insultingly low prices.\nA struggling Marketplace lacks either supply or demand. If the wares are not available, or nobody has either the wealth or the interest in obtaining what's there, commerce will wither on the vine.\n\n- Does the neighborhood have the wrong goods, or the wrong buyers?\n- What hidden assets might still be found here?\n- Who profits from the current situation? Who does not?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    },
    {
      "uid": "d5415970c0c35b2ad1695ff032588100",
      "name": "The Sanctuary",
      "front": {
        "name": "The Sanctuary",
        "description": "The Sanctuary is a city within the city. It might be a walled-off enclave, a culturally distinct community, a gentrified neighborhood, a historical relic, or something else. A sanctuary has its own shops, homes, and infrastructure, enough to sustain its residents and sharing their aesthetic tastes.\nA flourishing Sanctuary is self-sufficient. The citizens are healthy and prosperous. The uniqueness of the Sanctuary is maintained and respected.\n\n- Who lives here? Why do they live here specifically?\n- What is it that separates the Sanctuary from the rest of the city?\n- What sustains the sanctuary and its peoples' lifestyles?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "The Sanctuary",
        "description": "The Sanctuary is a city within the city. It might be an isolated enclave, a brow-beaten borough, a place to abandon the unwanted, or something else. A sanctuary can barely sustain its residents, whether due to lack of goods or intentional deprivation.\nA struggling Sanctuary needs support from outside. The inhabitants might ask for, or demand, or beg for assistance. The uniqueness of the Sanctuary is threatened, or seen as a threat.\n\n- Who lives here? Why do they live in the Sanctuary specifically?\n- Is the Sanctuary keeping the outside out, or the inhabitants in?\n- Who rules here? Who suffers?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    },
    {
      "uid": "2ff78c2ed8ff47f0cc7f29944d516561",
      "name": "The Temple",
      "front": {
        "name": "The Temple",
        "description": "The Temple is devoted to the spiritual and religious elements of the city and its inhabitants. It might be a single colossal church, a network of holy places for every faith, or tiny shrines to tiny gods scattered across the city.\nA flourishing Temple attracts a faithful flock. Worshippers come to pray, to donate, and to find their inner selves. Priests, wise men, and perhaps actual spirits may intercede to help troubled souls or provide advice.\n\n- What belief system or systems are practiced here?\n- Are beliefs or practices divided along social lines such as wealth, species, or neighborhood?\n- How has faith affected the city for good? For ill?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "The Temple",
        "description": "The Temple is devoted to the spiritual and religious elements of the city and its inhabitants. It might be a disgraced or amoral mega-church, a collection of squabbling rival churches, or the remnants of an older and forgotten belief system.\nA struggling Temple has been abandoned by its flock. The city as a whole might consider faith a dead end or a scam. The priests and leaders may have become corrupt or greedy, or simply have lost faith in their own institutions. If there are real gods, it's even possible they have abandoned the city.\n\n- What belief system or systems were practiced here?\n- What motive, such as greed, corruption, or apathy, stands against them?\n- How has a lack of faith helped, or hurt?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    },
    {
      "uid": "2c4b8fc69b5636534ea4f20c3784c225",
      "name": "The Underground",
      "front": {
        "name": "The Underground",
        "description": "The Underground is what people don't see about the city. It is actual underground construction, like sewers or burial chambers. It is infrastructure, like aqueducts, that everyone needs but nobody cares about.\nA flourishing Underground ensures quality of life for the city's inhabitants. The city's needs, like water and waste, flow where they must.\n\n- Was the Underground mostly natural to begin with, such as rivers or caves? How much was constructed?\n- How does the Underground physically connect with the rest of the city?\n- Who lives here, and what do they do?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "The Underground",
        "description": "The Underground is what people don't want to see about the city. It is the filthy waterways and skull-strewn tombs. It is the home of the city's underprivileged and forgotten.\nA struggling Underground has been abandoned or is being misused. It might provide hideouts for violent criminals, or prove dangerous to visitors through mere neglect.\n\n- How much of the Underground still functions? What has broken down?\n- What social ills, like disease or poverty, have taken hold?\n- Who lives here, and how are they suffering?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    },
    {
      "uid": "c38537bdd02f7b01506615d2ca0f1c97",
      "name": "Uptown",
      "front": {
        "name": "Uptown",
        "description": "Uptown is the city's crown. It is home to the elite, including skilled creators, wealthy merchants, influential politicians, and beloved performers. Visitors might beseech an Uptown resident to fund their ventures, or seek their attention for some new idea or creation.\nA flourishing Uptown can exert its will, for good or ill, on the surrounding city. They say \"power is where you say it is\", and the city says that social power lives here.\n\n- What political and social systems support the neighborhood's position?\n- How is that power wielded, and for whom?\n- How does someone become accepted by Uptown?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "Uptown",
        "description": "Uptown is the city's fallen crown. Bourgeoisie merchants with pretentions to greatness, shabby aristocrats fallen from favor, or forgotten influencers might all be found here.\nA struggling Uptown is a hollow vessel once filled with power, or a puppet dancing on someone else's strings. Residents might uphold the veneer out of pride, or dream of ways to reclaim real glory.\n\n- What political or social systems once supported the neighborhood?\n- Do the inhabitants still believe they hold real power?\n- What will they do to get it back?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    },
    {
      "uid": "71ae61214dff0465cc17c1971229ad7f",
      "name": "The Warren",
      "front": {
        "name": "The Warren",
        "description": "The Warren is the hidden heart of the city. It is an organic tangle of alleyways, residences, nameless shops, side streets, historical buildings, and more. It is what the city does with itself when no one is looking.\nA flourishing Warren keeps the city's heart beating. The things that make the city unique, such as its culture, tastes, and trends, emerge from here unannounced. The city's history is likewise on display for curious visitors.\n\n- What traditions or styles did the Warren give birth to?\n- What hidden treasures can be found here?\n- How do locals and visitors interact with each other?\n\nFlip to see the struggling version of this neighborhood"
      },
      "back": {
        "name": "The Warren",
        "description": "The Warren is the hidden heart of the city. It is an impenetrable maze of dark alleys, boarded-up shops, narrow streets, ancient graveyards, and more. It is the city's secret suffering.\nA struggling Warren is the city's surrender to despair. Strangers receive furtive looks when they visit this neighborhood, and long-time residents talk wistfully or bitterly about \"the way things used to be\".\n\n- Has the city forsaken itself, or fallen prey to outside influence?\n- What secrets do the inhabitants furtively guard?\n- Does the Warren bristle at visitors, or hunker down and wait for them to leave?\n\nFlip to see the flourishing version of this neighborhood"
      },
      "flipped": false,
      "home": "c5332c9ac49898fb30f6c6d445ec308e",
      "location": null
    }
  ],
  "collections": {
    "5ff9ff9703cabc6dc8d60eba71ac8343": {
      "uid": "5ff9ff9703cabc6dc8d60eba71ac8343",
      "name": "Core Rules -- Agenda",
      "expanded": false
    },
    "527b736d4e0597761549380a2411ea44": {
      "uid": "527b736d4e0597761549380a2411ea44",
      "name": "Core Rules",
      "expanded": false
    },
    "7217b63d98260500b3aa9d7a0b49c4e3": {
      "uid": "7217b63d98260500b3aa9d7a0b49c4e3",
      "name": "Core Rules -- Crisis",
      "expanded": false
    },
    "0e5fccedcc5c38bd60a22dfd08afbf76": {
      "uid": "0e5fccedcc5c38bd60a22dfd08afbf76",
      "name": "Character -- Focus",
      "expanded": false
    },
    "4e787313e1b02b79c6d4a079b5b42258": {
      "uid": "4e787313e1b02b79c6d4a079b5b42258",
      "name": "Character -- Role",
      "expanded": false
    },
    "cb7b37050fb00475eed11d3f943f3af7": {
      "uid": "cb7b37050fb00475eed11d3f943f3af7",
      "name": "Character -- Upbringing",
      "expanded": false
    },
    "9576eca347487ea0bad60662ede3958b": {
      "uid": "9576eca347487ea0bad60662ede3958b",
      "name": "Condition",
      "expanded": false
    },
    "9c554a0573c474b0c94434978d6f2eaa": {
      "uid": "9c554a0573c474b0c94434978d6f2eaa",
      "name": "Encounter",
      "expanded": false
    },
    "648f0b8328bde403506928372556026e": {
      "uid": "648f0b8328bde403506928372556026e",
      "name": "Oracle -- Success",
      "expanded": false
    },
    "b76a07b1171d4a8c8cdd36fb5eee43aa": {
      "uid": "b76a07b1171d4a8c8cdd36fb5eee43aa",
      "name": "Oracle -- Emotion",
      "expanded": false
    },
    "f16ac12c8e027c84f01ddf8f20be4bc9": {
      "uid": "f16ac12c8e027c84f01ddf8f20be4bc9",
      "name": "City Builder -- Dynamic",
      "expanded": false
    },
    "c5332c9ac49898fb30f6c6d445ec308e": {
      "uid": "c5332c9ac49898fb30f6c6d445ec308e",
      "name": "City Builder -- Neighborhood",
      "expanded": false
    }
  }
}

export const presets: Preset[] = [
  {
    name: "Create Spread",
    description: "Create a new empty spread for cards",
    collections: []
  },
  {
    name: "Create Character",
    description: "Create a new player character with an Upbringing, a Role, and a Focus",
    collections: [
      {
        collectionUid: "cb7b37050fb00475eed11d3f943f3af7",
        flipRule: PresetFlipRule.NO
      },
      {
        collectionUid: "4e787313e1b02b79c6d4a079b5b42258",
        flipRule: PresetFlipRule.NO
      },
      {
        collectionUid: "0e5fccedcc5c38bd60a22dfd08afbf76",
        flipRule: PresetFlipRule.NO
      }
    ]
  },
  {
    name: "Create Encounter",
    description: "Create a new encounter with two Encounter cards and one Emotion",
    collections: [
      {
        collectionUid: "9c554a0573c474b0c94434978d6f2eaa",
        flipRule: PresetFlipRule.NO
      },
      {
        collectionUid: "9c554a0573c474b0c94434978d6f2eaa",
        flipRule: PresetFlipRule.NO
      },
      {
        collectionUid: "b76a07b1171d4a8c8cdd36fb5eee43aa",
        flipRule: PresetFlipRule.YES
      }
    ]
  },
  {
    name: "Create City",
    description: "Create a new city out of three Neighborhoods and two Dynamics connecting them",
    collections: [
      {
        collectionUid: "c5332c9ac49898fb30f6c6d445ec308e",
        flipRule: PresetFlipRule.RANDOM
      },
      {
        collectionUid: "f16ac12c8e027c84f01ddf8f20be4bc9",
        flipRule: PresetFlipRule.RANDOM
      },
      {
        collectionUid: "c5332c9ac49898fb30f6c6d445ec308e",
        flipRule: PresetFlipRule.RANDOM
      },
      {
        collectionUid: "f16ac12c8e027c84f01ddf8f20be4bc9",
        flipRule: PresetFlipRule.RANDOM
      },
      {
        collectionUid: "c5332c9ac49898fb30f6c6d445ec308e",
        flipRule: PresetFlipRule.RANDOM
      }
    ]
  }
]