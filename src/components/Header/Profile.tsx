import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export default function Profile ({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData &&
      <Box mr='4' textAlign='right'>
        <Text>Carlos Dória</Text>
        <Text color='gray.300' fontSize='small'>
          carlosdoria@gmail.com
        </Text>
      </Box>
      }

      <Avatar size='md' name='Carlos Dória' src='https://github.com/carlosdoria.png' />
    </Flex>
  )
}