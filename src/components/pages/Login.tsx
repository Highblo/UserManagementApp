import { FC, memo, useState } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
const [userId, setUserId] = useState("");
const { login, loading } = useAuth();

const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

const onClickLogin = () => login(userId);
 
  return (
    <Flex justify="center" align="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" userSelect="none">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton loading={loading} disabled={userId === ""} onClick={onClickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
}); 