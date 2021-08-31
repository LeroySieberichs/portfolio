import React, { useState } from "react"
import {
    Box,
    Spinner,
    Link
  } from "@chakra-ui/react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
      : props.fallback || <Link href="/login">You must be signed in</Link>;
  }