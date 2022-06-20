import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/shoppingCartSlice";

const ProductComponent = () => {
  // Import our products state from our redux store
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // navigate("/cart");
  };

  // Create a variable containing our map function to pass into our jsx
  const renderList = products.map((product) => {
    const { id, title, image, price } = product;
    return (
      <div key={id} className="container max-w-xs h-full m-auto rounded-lg shadow-2xl">
        <div className="mx-5 p-5 md:mx-1 md:p-3">
          <div>
            <img
              className="mx-auto mb-5 w-full min-w-full h-60 object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="text-center text-md">
            <p className="leading-4 font-semibold tracking-wide">{title}</p>
            <p className="font-semibold italic tracking-wider">${price}</p>
            <div className="flex justify-center">
              {/* useParams will grab id in <ProductDetails/> comp */}
              <Link to={`/product/${id}`}>
                <button className="mt-3 mr-4 text-md font-semibold text-white  py-2 px-3 tracking-wider bg-purple-400 hover:bg-purple-500 border-b-4 border-purple-300  hover:border-purple-500 rounded cursor-pointer">
                  View
                </button>
              </Link>
              <button
                className="my-3 text-md font-semibold text-white py-2 px-3  tracking-wider bg-blue-500 hover:bg-blue-600 border-b-4 border-blue-400  hover:border-blue-600 rounded cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  // Return map inside our jsx
  return <>{renderList}</>;
};

export default ProductComponent;

// card container styling
// <div className="container max-w-xs mx-auto min-h-4/5 mt-20 p-5 border-3 rounded-lg shadow-2xl ">
