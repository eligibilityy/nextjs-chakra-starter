import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import Main from '../components/layout/main'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
