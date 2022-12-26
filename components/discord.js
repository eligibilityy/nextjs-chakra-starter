import {
  Box,
  Spinner,
  Heading,
  Text,
  useColorModeValue,
  Card,
  Flex,
  CardHeader,
  Avatar
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

function FetchData() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const ID = '997063531763617803'

    fetch(`https://api.lanyard.rest/v1/users/${ID}`)
      .then(res => res.json())
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
  }, [])

  return { data, loading }
}

const DiscSpotify = () => {
  const { data, loading } = FetchData()
  const color = useColorModeValue('blackAlpha.600', 'whiteAlpha.500')

  if (loading) {
    return (
      <Box my={5}>
        <Card variant="outline" p={4}>
          <Flex spacing={4}>
            <Flex flex={1} gap={4} alignItems="center">
              <Spinner size="xl" />
              <Text>Fetching . . .</Text>
            </Flex>
          </Flex>
        </Card>
      </Box>
    )
  }

  return (
    <Box mb={5}>
      <Card maxW="100%" variant="outline">
        <CardHeader>
          <Flex spacing={4}>
            <Flex flex={1} gap={4} alignItems="center" flexWrap="wrap">
              <Avatar
                name={data.discord_user.username}
                src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`}
              />

              <Box>
                <Heading fontSize="xl" fontFamily="Space Grotesk">
                  {data.discord_user.username}
                  <Text as="span" color={color}>
                    #{data.discord_user.discriminator}
                  </Text>
                </Heading>
                <Text color={color}>
                  {data.discord_status === 'online'
                    ? 'Currently Online'
                    : data.discord_status === 'dnd'
                    ? 'Do Not Disturb'
                    : data.discord_status === 'idle'
                    ? 'Idle'
                    : '.     .     .'}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
      </Card>
    </Box>
  )
}

export default DiscSpotify
