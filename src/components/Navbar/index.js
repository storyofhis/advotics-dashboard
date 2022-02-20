import { ReactNode } from "react";
import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import { VStack, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import { BrowserRouter as Router, Switch, Route, Link as LINK } from "react-router-dom";

const Links = [];

const NavLink = ({ children }) => (
  <Router>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={`/${children}`}
    >
      {children}
    </Link>
  </Router>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading ml="8" size="md" fontWeight="semibold" color="green.400">
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href="/"
                >
                  advotics
                </Link>
              </Heading>
            </Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <VStack p={9}>
                <Flex w="100%">
                  <Spacer />
                  <IconButton ml={2} icon={<CgProfile />} isRound="true" />
                  <IconButton ml={2} icon={<FiLogOut />} isRound="true" />
                  <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
                </Flex>
              </VStack>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
