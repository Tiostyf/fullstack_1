import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import { useColorStore } from "./store/colorStore";

export default function App() {
  const { bgColor } = useColorStore();

  return (
    <Box minH="100vh" bg={bgColor} transition="background-color 0.3s ease">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </Box>
  );
}
