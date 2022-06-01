import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../features/selectedProductSlice";

// *** missing funcitonality to increment/decrement amount of products being added to cart

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  // Destructure values that we need to display from product
  const { id, image, title, price, category, description } = product;

  // Destructure product id from ProductComponent </Link> url
  // console.log("product id:", productId);
  const { productId } = useParams();

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
    // Clear our state after component is destroyed,
    // this prevents previous item from rendering before
    // transition to new product detail
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="mt-[6em]">
          <div>
            <img src={image} alt={id} />
          </div>
          <div>
            <h1>{title}</h1>
            <p>${price}</p>
            <h3>{category}</h3>
            <p>{description}</p>
            {/* animated add to cart button */}
            <button>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
