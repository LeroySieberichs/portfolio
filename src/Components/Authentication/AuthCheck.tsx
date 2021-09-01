import React from "react"
import Login from "../../Pages/Login"
import {
    Box,
    Spinner,
  } from "@chakra-ui/react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../lib/firebase";
export default function AuthCheck(props) {
    const [user, loading] = useAuthState(auth);
  
    if (loading)
      return (
        <Box h="600px">
          <Spinner
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            m="auto"
          />
        </Box>
      );
    return user
      ? props.children
      : props.fallback || <Login />
  }