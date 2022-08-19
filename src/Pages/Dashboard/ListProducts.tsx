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
      templateColumns={[
        "repeat(8,1fr)",
        "repeat(8,1fr)",
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(4,1fr)",
      ]}
      // gap={2}
      rowGap={8}
      columnGap={6}
      w={["90vw", "90vw", "90vw", "90vw"]}
      margin="auto"
      mt="16"
      overflow={["scroll", "scroll", "hidden", "hidden"]}
    >
      {products.map((product, index) => (
        <Products key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ListProducts;
