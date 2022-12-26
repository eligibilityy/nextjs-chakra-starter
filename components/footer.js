import { Box, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" my={8}>
      &copy; {new Date().getFullYear()} Liya+.{' '}
      <Link
        as={NextLink}
        href="https://github.com/eligibilityy"
        passHref
        isExternal
        noreferrer
        noopener
      >
        <Text fontSize={32}>
          <IoLogoGithub />
        </Text>
      </Link>
    </Box>
  )
}

export default Footer
