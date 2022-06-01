import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductComponent = () => {
  // Import our products state from our redux store
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // Create a variable containing our map function to pass into our jsx
  const renderList = products.map((product) => {
    const { id, title, image, price } = product;
    return (
      <div key={id}>
        <div className="container max-w-xs mx-auto min-h-4/5 mt-20 p-5 border-3 rounded-lg shadow-2xl ">
          <div>
            <img
              className="mx-auto mb-5 w-full min-w-full h-80 object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="text-center ">
            <p className=" text-md leading-4 font-semibold tracking-wide">
              {title}
            </p>
            <p className="text-lg font-semibold italic tracking-wider">
              ${price}
            </p>
            <div className="flex justify-center align-middle mb-">
              {/* useParams will grab id in <ProductDetails/> comp */}
              <Link to={`/product/${id}`}>
                <button className="mt-3 mr-4 text-md font-semibold text-white  py-2 px-3 tracking-wider bg-purple-400 hover:bg-purple-500 border-b-4 border-purple-300  hover:border-purple-500 rounded cursor-pointer">
                  View
                </button>
              </Link>
              <button className="mt-3 text-md font-semibold text-white py-2 px-3  tracking-wider bg-blue-500 hover:bg-blue-600 border-b-4 border-blue-400  hover:border-blue-600 rounded cursor-pointer" onClick={()=> {dispatch(addToCart(item))}}>
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

// mt-24 mx-auto max-w-xs p-3 border-2  sm:mx-5
