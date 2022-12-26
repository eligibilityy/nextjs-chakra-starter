import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FFFFFF', '#0E0E0E')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'main-title': {
        fontSize: 32,
        marginBottom: 3
      },
      'nav-title': {
        fontSize: 24
      }
    }
  },
  IconButton: {
    variants: {
      'link-btn': {
        size: 'xl'
      }
    }
  }
}

const fonts = {
  heading: `'Space Grotesk'`,
  body: `'Inter'`
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts })
export default theme
