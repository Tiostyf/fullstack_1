import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStoreItemStore } from "../store/storeItemStore";

export default function StoreItemCard({ item }) {
  const deleteItem = useStoreItemStore((state) => state.deleteItem);

  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" bg="white" p={4}>
      <Image src={item.image} alt={item.name} boxSize="200px" objectFit="cover" mx="auto" />
      <Stack mt={4} spacing={2}>
        <Text fontWeight="bold">{item.name}</Text>
        <Text>${item.price}</Text>
        <Stack direction="row" spacing={2}>
          <Link to={`/update/${item._id}`}>
            <Button size="sm" colorScheme="blue">Edit</Button>
          </Link>
          <Button size="sm" colorScheme="red" onClick={() => deleteItem(item._id)}>Delete</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
