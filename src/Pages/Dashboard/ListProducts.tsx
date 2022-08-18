import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import Products from "../../components/Card/Products";
import { useAuth } from "../../Providers/modules/AuthContext";
import { useProducts } from "../../Providers/modules/ProductsContext";

const ListProducts = () => {
  const { products, loadProducts } = useProducts();
  const { accessToken } = useAuth();

  useEffect(() => {
    loadProducts(accessToken);
  }, []);
  return (
    <Grid
      templateColumns="repeat(4,1fr)"
      gap={6}
      w="1402px"
      margin="auto"
      mt="16"
    >
      {products.map((product) => (
        <Products key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ListProducts;
