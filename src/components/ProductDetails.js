import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../features/productsSlice";

const ProductDetails = () => {
  const products = useSelector((state) => state.allProducts.products);

  // Destructure id from ProductComponent
  const { productId } = useParams();
  console.log(productId);

  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("error", err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    selectedProduct();
  }, []);

  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
