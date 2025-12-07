//
import { SimpleGrid, Container } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const products = [
    { id: 1, name: "Moon", price: 50, image: "/images/moon.png" },
    { id: 2, name: "Earth", price: 150, image: "/images/earth.png" },
    { id: 3, name: "Mars", price: 100, image: "/images/mars.png" },
];

const Home = () => {
    return (
        <Container maxW="container.xl" py="6">
            <SimpleGrid columns={[1, 2, 3]} spacing="6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Home;
