import { FC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
  id: number;
}

export const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick, id } = props;
  return (
    <Box 
      w="260px"
      h="260px" 
      bg="white" 
      borderRadius="10px" 
      shadow="md" 
      p={4} 
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}>
      <Stack textAlign="center">
        <Image 
          borderRadius="full" 
          boxSize="160px" 
          src={imageUrl}
          alt={userName} 
          m="auto" />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  );
});