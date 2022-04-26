import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/productsSlice";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.setProducts);
  const dispatch = useDispatch();

  // Create our async function using axios to
  // grab a list of products from an api
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    // log our response to verify that we are getting our products
    console.log(res.data);
    // We are dispatching our response to the redux store
    // to update the state of setProducts
    dispatch(setProducts(res.data));
  };

  // Create our useEffect to run our fetchProducts() async func
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
