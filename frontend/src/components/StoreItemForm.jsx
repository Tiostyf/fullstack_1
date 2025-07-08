// src/components/StoreItemForm.jsx
import { useState } from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useStoreItemStore } from "../store/storeItemStore";

export default function StoreItemForm({
  initialData = {},
  isUpdate = false,
  itemId,
}) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    price: initialData.price || "",
    image: initialData.image || "",
  });

  const toast = useToast();
  const navigate = useNavigate();
  const { addItem, updateItem } = useStoreItemStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      await updateItem(itemId, formData);
      toast({
        title: "✅ Product updated!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      await addItem(formData);
      toast({
        title: "✅ Product created!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    navigate("/");
  };

  return (
    <Box
      maxW="500px"
      mx="auto"
      mt={10}
      p={8}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="xl"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <FormControl id="name" isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input
              placeholder="Enter product name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              focusBorderColor="blue.500"
            />
          </FormControl>

          <FormControl id="price" isRequired>
            <FormLabel>Price ($)</FormLabel>
            <Input
              placeholder="Enter price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              focusBorderColor="blue.500"
            />
          </FormControl>

          <FormControl id="image" isRequired>
            <FormLabel>Image URL</FormLabel>
            <Input
              placeholder="Paste image URL"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              focusBorderColor="blue.500"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            w="full"
            _hover={{ bg: "blue.600" }}
          >
            {isUpdate ? "Update Product" : "Create Product"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
