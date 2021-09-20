import { Box, Container, Image, Link } from '@chakra-ui/react'
import { firestore } from "lib/firebase"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { chakra, useColorMode } from '@chakra-ui/system'
import React from 'react'
import '../../styles/card.css'

export default function Card(props: { month: any; }) {

  var cardList: JSX.Element[] = []


  const { colorMode } = useColorMode()

  const [value, loading, error] = useCollectionData(
    firestore.collection('portfolio').where("month", "==", props.month),
    {

    }
  );

  function cardGenerate(data: any[]) {
    data.forEach((item: any) => {

      cardList.push(card(item))



    })
    var sortedArray = cardList.sort((a, b) => (a > b) ? 1 : -1)
    return sortedArray;
  }

  const image = (data: string) => {
    console.log(data);

    if (data != null) {
      return (
        <Link href={process.env.PUBLIC_URL + 'img/' + data + '.png'} isExternal>
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={process.env.PUBLIC_URL + 'img/' + data + '.png'}
            alt="Article"
          />
        </Link>

      )
    }
    return null
  }

  const card = (data: { imagename: any; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; feedback: string; }) => {
    return (
      <div>
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg={colorMode}
          maxW="2xl"
        >
          {image(data.imagename)}

          <Box p={6}>
            <Box>
              <Link
                display="block"
                color={colorMode}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600", textDecor: "underline" }}

              >
                {data.title}
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color={colorMode}
              >
                <span>{data.description}</span>
              </chakra.p>
            </Box>
            
          </Box>
          {image(data.feedback)}
        </Box>
        <Container maxW="xl" centerContent>
          <Box padding="4" maxW="3xl">

          </Box>
        </Container>
      </div>
    )
  }

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>loading</span>}
      {value && cardGenerate(value)}
    </div>
  )


}
