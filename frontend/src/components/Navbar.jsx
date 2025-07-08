import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useColorStore } from "../store/colorStore";

export default function Navbar() {
  const { setBgColor } = useColorStore();

  const colors = [
    { label: "White", value: "#ffffff" },
    { label: "Gray", value: "#edf2f7" },
    { label: "Blue", value: "#3182ce" },
    { label: "Purple", value: "#805ad5" },
    { label: "Green", value: "#38a169" },
    { label: "Gold", value: "#d69e2e" },
    { label: "Red", value: "#e53e3e" },
  ];

  const handleColorSelect = (color) => {
    setBgColor(color);
    document.body.style.backgroundColor = color; // fallback
  };

  return (
    <Box
      bg="blue.50" // ✅ Soft navbar background color
      px={8}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      boxShadow="md"
    >
      <Flex align="center">
        <Button
          as={Link}
          to="/"
          variant="ghost"
          size="md"
          borderRadius="full" // ✅ Fully rounded
          px={4}
          _hover={{ bg: "blue.100" }}
        >
          <Heading size="md" color="blue.700">
            Rio Store
          </Heading>
        </Button>

        <Spacer />

        <Button
          as={Link}
          to="/create"
          colorScheme="blue"
          size="md"
          borderRadius="md"
          mr={4}
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
        >
          Add Product
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            colorScheme="teal"
            size="md"
            borderRadius="md"
            rightIcon={<ChevronDownIcon />}
          >
            BG Color
          </MenuButton>
          <MenuList>
            {colors.map((c) => (
              <MenuItem key={c.value} onClick={() => handleColorSelect(c.value)}>
                {c.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
