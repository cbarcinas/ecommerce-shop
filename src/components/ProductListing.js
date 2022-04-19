import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);

  // fetch all products using async
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    // log our response to verify that we are getting our products
    console.log(res);
  };

  // create our useEffect to run our fetchProdcuts func
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
