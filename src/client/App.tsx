import React from "react"
import { useTheme, ThemeProvider, withTheme } from "@emotion/react"
import theme from "@rebass/preset"
import GameContainer from "./GameContainer"

export default (props: any) => (
    <ThemeProvider theme={theme}>
        <GameContainer />
    </ThemeProvider>
)
