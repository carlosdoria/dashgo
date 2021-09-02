import { Flex, Icon, Input, HStack, Text, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import Logo from './Logo'
import NotificationNax from './NotificationNax'
import Profile from './Profile'
import SearchBar from './SearchBar'

export function Header () {
  return(
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Logo />

     <SearchBar />
    
      <Flex
        align='center'
        ml='auto'
      >
       
       <NotificationNax />
      
        <Profile />
      
      </Flex>
    
    </Flex>
  )
} 