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
          <div className="container max-w-xs min-h-[2em] mx-auto mt-24 p-5 border-3 rounded-lg shadow-2xl  ">
            <div>
              <img className="mx-auto mb-10 w-64" src={image} alt={title} />
            </div>
            <div className="text-center">
              <p>{title}</p>
              <p>${price}</p>
              <p>{category}</p>
              <button className="">Add to Cart</button>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  // eturn map inside our jsx
  return <>{renderList}</>;
};

export default ProductComponent;

// mt-24 mx-auto max-w-xs p-3 border-2  sm:mx-5
