import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <Navbar />
        <Home />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
