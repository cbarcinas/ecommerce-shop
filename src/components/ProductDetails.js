import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "../features/selectedProductSlice";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  // Destructure values that we need to display from product
  const { image, title, price, category, description } = product;

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
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                {/* animated add to cart button */}
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
