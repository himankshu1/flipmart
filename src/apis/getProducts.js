export const fetchProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
