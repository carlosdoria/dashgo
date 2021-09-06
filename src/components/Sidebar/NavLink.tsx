import { ElementType } from "react";
import { Link as ChackraLink, Icon, Text, LinkProps as ChakraLinkPropsChakraUI } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkPropsChakraUI {
  icon: ElementType
  text: string
  href: string
}

export function NavLink ({ icon, text, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink display='flex' align='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{text}</Text>
      </ChackraLink>
    </ActiveLink>
  )
}