import {
  ReactNode,
  createContext,
  useContext,
  useCallback,
  useState,
} from "react";
import api from "../../Server/api";

interface ProductsProviderProps {
  children: ReactNode;
}

interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
}

interface ProductsContextDatas {
  products: Product[];
  cartProducts: Product[];
  loadProducts(accessToken: string): Promise<void>;
  loadCart(userId: string, accessToken: string): Promise<void>;
  addToCart(data: Omit<Product, "id">, accessToken: string): Promise<void>;
}

const ProductsContext = createContext<ProductsContextDatas>(
  {} as ProductsContextDatas
);

const useProducts = () => useContext(ProductsContext);

const PorductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>(() => {
    const productsCartUser = localStorage.getItem("@Hamburgueria:Cart");

    if (productsCartUser) {
      return [...JSON.parse(productsCartUser)];
    }
    return [] as Product[];
  });

  const loadProducts = useCallback(async (accessToken: string) => {
    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const loadCart = useCallback(async (userId: string, accessToken: string) => {
    try {
      const response = await api.get(`/users/${userId}?_embed=cart`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setCartProducts(response.data.cart);
      localStorage.setItem(
        "@Hamburgueria:Cart",
        JSON.stringify(response.data.cart)
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addToCart = useCallback(
    async (data: Omit<Product, "id">, accessToken: string) => {
      console.log(data);
      api
        .post("/cart", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const control = [...cartProducts, response.data];
          setCartProducts(control);
          localStorage.setItem("@Hamburgueria:Cart", JSON.stringify(control));
        })
        .catch((err) => console.log(err));
    },

    [cartProducts]
  );

  return (
    <ProductsContext.Provider
      value={{ products, cartProducts, loadProducts, addToCart, loadCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, PorductsProvider };
