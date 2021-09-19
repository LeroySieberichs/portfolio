import { Box, Container, Flex, Image, Link } from '@chakra-ui/react'
import { firestore } from "lib/firebase"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useColorModeValue, chakra, useColorMode } from '@chakra-ui/system'
import React from 'react'

export default function Card(props: { month: any; }) {

  var cardList: JSX.Element[] = []


  const { colorMode, toggleColorMode } = useColorMode()

  const [value, loading, error] = useCollectionData(
    firestore.collection('portfolio').where("month", "==", props.month),
    {

    }
  );

  function cardGenerate(data: any[]) {
    data.forEach((item: any) => {

      cardList.push(card(item))
      console.log(item);



    })
    var sortedArray = cardList.sort((a, b) => (a > b) ? -1 : 1)
    return sortedArray;
  }

  const image = (data) => {
    console.log(data);

    if (data != " ") {
      return (
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={process.env.PUBLIC_URL + 'img/' + data + '.png'}
          alt="Article"
        />
      )
    }
    return null
  }

  const card = (data: { imagename: string; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
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
                {data.description}
              </chakra.p>
            </Box>


          </Box>
        </Box>
        <Container maxW="xl" centerContent>
          <Box padding="4"  maxW="3xl">

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
