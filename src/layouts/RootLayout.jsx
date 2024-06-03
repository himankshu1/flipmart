import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const RootLayout = () => {
  const [isLoading, error, data] = useContext(ProductsContext);

  console.log(isLoading, error, data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className="flex flex-col justify-between min-h-screen p-8">
      <Header />
      <h1 className="ml-8 mt-16 mb-5 font-semibold text-2xl">
        Checkout trending products
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {data?.map((product, index) => (
          <ProductCard key={index} item={product} />
        ))}
      </div>
      {/* <ProductCard /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
