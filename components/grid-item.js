import Image from 'next/image'
import { Box, Text, LinkBox, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ title, thumbnail }) => (
  <Box
    w="100%"
    textAlign="left"
    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    p={2}
    borderRadius="md"
  >
    <LinkBox cursor="pointer">
      <Text
        fontWeight="bold"
        mb={2}
        color={useColorModeValue('blackAlpha.700', 'whiteAlpha.500')}
      >
        {title}
      </Text>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item"
        placeholder="blur"
        loading="lazy"
        draggable={false}
      />
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
            .grid-item {
                border-radius: 5px;
            }
        `}
  />
)
