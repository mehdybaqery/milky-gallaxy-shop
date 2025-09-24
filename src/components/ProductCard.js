import { Box, Image, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        addToCart(product);
        setActive(true);

        // بعد از 1 ثانیه حالت active برداشته شود
        setTimeout(() => setActive(false), 1000);
    };

    return (
        <MotionBox
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow={active ? "xl" : "md"}
            p="4"
            animate={{ scale: active ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
        >
            <Image src={product.image} alt={product.name} borderRadius="md" />
            <Stack mt="3" spacing="2">
                <Heading size="md">{product.name}</Heading>
                <Text fontWeight="bold">${product.price}</Text>
                <Button colorScheme="teal" onClick={handleClick}>
                    Add to Cart
                </Button>
            </Stack>
        </MotionBox>
    );
};

export default ProductCard;
