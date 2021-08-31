import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Home from "./Pages/Home"
import Fontys from "./Pages/Fontys"
import {
  Switch,
  Route
} from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Switch>
      {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
      <Route path="/fontys">
        <Fontys />
      </Route>

      {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </ChakraProvider>
)
