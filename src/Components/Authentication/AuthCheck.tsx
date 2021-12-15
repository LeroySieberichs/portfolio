import React from "react"
import Login from "../../Pages/Login"
import {
    Box,
    Spinner,
  } from "@chakra-ui/react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../lib/firebase";
export default function AuthCheck(props) {
  
  //defining variables of the hook, user being the retrieved data, loading is called when user hasn't been retrieved yet, and error is when nothing could be retrieved
    const [user, loading,error] = useAuthState(auth);
    if (error) {
      return (
        <div>
          <p>Error: {error}</p>
        </div>
      );
    }
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