import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { fetchProducts } from "../apis/getProducts";

export const ProductsContext = createContext([]);

// eslint-disable-next-line react/prop-types
export const ProductsContextProvider = ({ children }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  console.log(data);

  return (
    <ProductsContext.Provider value={[isLoading, error, data]}>
      {children}
    </ProductsContext.Provider>
  );
};
