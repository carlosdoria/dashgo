import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile () {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Carlos Dória</Text>
        <Text color='gray.300' fontSize='small'>
          carlosdoria@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Carlos Dória' src='https://github.com/carlosdoria.png' />
    </Flex>
  )
}