import CssBaseline from "@mui/material/CssBaseline"
import React from "react"
import { Link, Route, Routes } from "react-router-dom"

import ConstellationCardsHome from "../constellation-cards/client/ConstellationCardsHome"
import GameContainer from "./GameContainer"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export default (props: any) => (
    <React.Fragment>
        <CssBaseline />
        <Routes>
            <Route path="/" element={<ConstellationCardsHome />} />
            <Route path="/game" element={<GameContainer />} />
        </Routes>
    </React.Fragment>
)
