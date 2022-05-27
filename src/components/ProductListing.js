import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/productsSlice";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  // Import our products state from our redux store
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // Create our async function using axios to
  // grab a list of products from an api
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    // Log our response to verify that we are getting our products
    console.log(response.data);
    // We are dispatching our response to the redux store
    // to update the state of setProducts
    dispatch(setProducts(response.data));
  };

  // Create our useEffect to run our fetchProducts() async func
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto my-8 auto-rows-auto sm:grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
