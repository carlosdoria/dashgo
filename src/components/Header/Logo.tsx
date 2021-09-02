import { Text } from "@chakra-ui/react";

export default function Logo () {
  return (
    <Text
      w='64'
      fontSize='3xl'
      fontWeight='bold'
      letterSpacing='tight'
    >
      Dashgo
      <Text as='span' ml='1' color='pink.500'>.</Text>
    </Text>
  )
}