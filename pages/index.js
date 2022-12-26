import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import ToggleButton from '../components/toggle'
import NextLink from 'next/link'

import Kobeni from '../public/kobeni.jpg'
import Ryo from '../public/ryo.jpg'
import { GridItem, GridItemStyle } from '../components/grid-item'
import DiscSpotify from '../components/discord'

const Home = () => (
  <>
    <GridItemStyle />
    {/* Change maxW prop whichever you like */}
    <Container maxW='4xl'>
      {/* You can turn this into a nav component : )*/}
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Link
          as={NextLink}
          href="/"
          passHref
          scroll={false}
          style={{
            textDecoration: 'none'
          }}
        >
          <Heading variant="nav-title">Nav</Heading>
        </Link>
        <ToggleButton />
      </Flex>

      <Box
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        borderRadius="md"
        p={3}
        my={5}
      >
        <Heading as="h1" variant="main-title">
          Next.js/Chakra UI Boilerplate
        </Heading>
        <Text color={useColorModeValue('blackAlpha.700', 'whiteAlpha.500')}>
          Aliquip fugiat mollit veniam laborum ipsum deserunt. Eiusmod ex
          aliquip ullamco enim irure ullamco do officia cillum est pariatur
          adipisicing culpa. Ea fugiat labore ad nisi nulla elit ea elit sit
          velit laboris eiusmod proident.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 2, 2]} gap={2}>
        <DiscSpotify />
        <DiscSpotify />
      </SimpleGrid>

      <SimpleGrid columns={[1, 2, 2]} gap={2} mb={8}>
        <GridItem thumbnail={Kobeni} title="test" />
        <GridItem thumbnail={Ryo} title="test" />
      </SimpleGrid>
    </Container>
  </>
)

export default Home
