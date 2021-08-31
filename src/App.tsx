import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Fontys from "./Pages/Fontys"
import {
  Switch,
  Route
} from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Switch>
      <Route exact path="/fontys">
        <Fontys />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      
    </Switch>
  </ChakraProvider>
)
