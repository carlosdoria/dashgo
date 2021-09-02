import { ElementType } from "react";
import { Link, Icon, Text, LinkProps as ChakraLinkPropsChakraUI } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkPropsChakraUI {
  icon: ElementType
  text: string
}

export function NavLink ({ icon, text, ...rest }: NavLinkProps) {
  return (
    <Link display='flex' align='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{text}</Text>
    </Link>
  )
}