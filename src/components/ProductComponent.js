import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  // Import our products state from our redux store
  const products = useSelector((state) => state.allProducts.products);

  // Create a variable containing our map function to pass into our jsx
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="" key={id}>
        {/* useParams will grab id in <ProductDetails/> comp */}
        <Link to={`/product/${id}`}>
          <div className="container max-w-xs min-h-[2em] mx-auto mt-24 p-5 border-3 rounded-lg shadow-2xl ">
            <div>
              <img className="mx-auto mb-10 w-64" src={image} alt={title} />
            </div>
            <div className="text-center ">
              <p className="font-semibold tracking-wide">{title}</p>
              <p className="text-lg font-semibold italic opacity-90 tracking-wider">
                ${price}
              </p>
              <p>{category}</p>
              <div className="flex justify-center align-middle">
                <button className="mt-3 mr-4 text-md font-semibold text-white tracking-wider bg-purple-400 hover:bg-purple-500 py-2 px-4 border-b-4 border-purple-300  hover:border-purple-500 rounded">
                  View
                </button>
                <button className="mt-3 text-md font-semibold text-white tracking-wider bg-blue-500 hover:bg-blue-600 py-2 px-4 border-b-4 border-blue-400  hover:border-blue-600  rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  // Return map inside our jsx
  return <>{renderList}</>;
};

export default ProductComponent;

// mt-24 mx-auto max-w-xs p-3 border-2  sm:mx-5
