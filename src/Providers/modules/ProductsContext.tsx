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

interface ProductCart {
  id: string;
  quantity: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

interface UpdateProduct {
  quantity: number;
  userId: string;
}

interface ProductsContextDatas {
  products: Product[];
  cartProducts: ProductCart[];
  loadProducts(accessToken: string): Promise<void>;
  loadCart(userId: string, accessToken: string): Promise<void>;
  addToCart(data: Omit<Product, "id">, accessToken: string): Promise<void>;
  removeFromCart(idProduct: string, accessToken: string): Promise<void>;
  order(
    idProduct: string,
    newProduct: UpdateProduct,
    accessToken: string
  ): Promise<void>;
  SearchProducts(Product: string, accessToken: string): Promise<void>;
}

const ProductsContext = createContext<ProductsContextDatas>(
  {} as ProductsContextDatas
);

const useProducts = () => useContext(ProductsContext);

const PorductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<ProductCart[]>(() => {
    const productsCartUser = localStorage.getItem("@Hamburgueria:Cart");

    if (productsCartUser) {
      return [...JSON.parse(productsCartUser)];
    }
    return [] as ProductCart[];
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
    async (data: Omit<ProductCart, "id">, accessToken: string) => {
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

  const removeFromCart = useCallback(
    async (idProduct: string, accessToken: string) => {
      await api.delete(`/cart/${idProduct}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    },
    [cartProducts]
  );

  const SearchProducts = useCallback(
    async (Product: string, accessToken: string) => {
      try {
        const response = await api.get(`products?category_like=${Product}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );
  const order = useCallback(
    async (
      idProduct: string,
      newProduct: UpdateProduct,
      accessToken: string
    ) => {
      await api
        .patch(`/cart/${idProduct}`, newProduct, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => console.log("deu certo"))
        .catch((err) => console.log(err));
    },
    [cartProducts]
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartProducts,
        loadProducts,
        addToCart,
        loadCart,
        removeFromCart,
        order,
        SearchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, PorductsProvider };
