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
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
}

interface ProductsContextDatas {
  products: Product[];
  loadProducts(accessToken: string): Promise<void>;
}

const ProductsContext = createContext<ProductsContextDatas>(
  {} as ProductsContextDatas
);

const useProducts = () => useContext(ProductsContext);

const PorductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <ProductsContext.Provider value={{ products, loadProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, PorductsProvider };
