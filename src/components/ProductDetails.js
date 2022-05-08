import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "../features/selectedProductSlice";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  console.log(product);

  // Destructure product id from ProductComponent </Link>
  const { productId } = useParams();
  //  console.log("product id:", productId);
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    // Store the server response
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("error", err));

    // Dispatch the response to the redux store
    dispatch(selectedProduct(response.data));

    // console.log("fetchProductDetail func:", response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId]);

  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;

// useEffect(() => {
//   if (productId && productId !== "") fetchProductDetail();
// }, [productId]);
