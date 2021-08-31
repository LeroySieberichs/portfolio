import React from 'react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {
    Flex,
    Icon,
    FlexProps,
  } from '@chakra-ui/react';

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    
  }
  const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
    );
  };

  export default NavItem;