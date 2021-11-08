import React from "react"
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import GameContainer from "./GameContainer"

export default (props: any) =>
  <ThemeProvider theme={theme}>
      <GameContainer />
  </ThemeProvider>
