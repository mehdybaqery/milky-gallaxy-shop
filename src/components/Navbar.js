import { Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <Flex bg="teal.500" color="white" p="4" align="center">
            <Heading size="md">Milky Galaxy Shop</Heading>
            <Spacer />
            <Button colorScheme="teal" variant="outline">
                Cart ({cartItems.length})
            </Button>
        </Flex>
    );
};

export default Navbar;
