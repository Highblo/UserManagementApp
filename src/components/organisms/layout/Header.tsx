import { FC, memo, useCallback } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MenuiconButton } from "../../atoms/button/MenuiconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(() => history.push("/home/user_management"), []);
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  return (
    <>
    <Flex 
      as="nav" 
      bg="teal.500" 
      color="gray.50" 
      align="center" 
      justify="space-between"
      padding={{ base: 3, md: 5 }}
      >
        <Flex 
          onClick={onClickHome}
          align="center" 
          as="a" mr={8} 
          _hover={{cursor: "pointer"}}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>ユーザー管理アプリ</Heading>
        </Flex>
        <Flex 
          align="center" 
          fontSize="sm" 
          flexGrow={2} 
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuiconButton onOpen={onOpen} />
    </Flex>
    <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting} />
    </>
  );
});