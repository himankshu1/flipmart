import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { ProductsContextProvider } from "./contexts/ProductsContext.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
