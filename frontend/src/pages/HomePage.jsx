// ✅ src/pages/HomePage.jsx

import { useEffect } from "react";
import {
  Grid,
  Container,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useStoreItemStore } from "../store/storeItemStore";
import StoreItemCard from "../components/StoreItemCard";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { items, fetchItems } = useStoreItemStore();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      {items.length === 0 ? (
        <VStack spacing={4} align="center" py={20}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            No products available yet.
          </Text>
          <Text fontSize="md" color="gray.600">
            Start adding your first product to share with the world!
          </Text>
          <Button
            as={Link}
            to="/create"
            colorScheme="blue"
            size="lg"
            borderRadius="md"
            boxShadow="md"
          >
            Create Product
          </Button>
        </VStack>
      ) : (
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={6}
        >
          {items.map((item) => (
            <StoreItemCard key={item._id} item={item} />
          ))}
        </Grid>
      )}
    </Container>
  );
}
