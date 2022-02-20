import React, { useState } from "react";
import { Flex, Text, IconButton, Divider, Avatar, Heading } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import { AiOutlineBarChart } from "react-icons/ai";
// import NavItem from '../components/NavItem'

export default function Sidebar() {
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      //   borderRadius={navSize == "small" ? "15px" : "30px"}
      // borderEndRadius="30px"
      //   w={navSize == "small" ? "75px" : "200px"}
      w="75px"
      flexDir="column"
      justifyContent="space-between"
    >
      {/* <Flex p="5%" flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} as="nav"> */}
      <Flex p="5%" flexDir="column" w="100%" as="nav">
        <IconButton background="none" mt={5} _hover={{ background: "none" }} icon={<FiMenu />} />
        <IconButton background="none" mt={5} _hover={{ background: "none" }} icon={<AiOutlineBarChart />} />
      </Flex>

      <Flex p="5%" flexDir="column" w="100%" mb={4}>
        <Divider />
        <Flex mt={4} align="center"></Flex>
      </Flex>
    </Flex>
  );
}
