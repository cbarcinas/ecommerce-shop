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
          <div className="mt-[6em] mx-auto max-w-xs p-3 border-2 rounded-lg shadow-lg">
            <div>
              <img className="m-auto mb-10 w-72" src={image} alt={title} />
            </div>
            <div>
              <p>{title}</p>
              <p>${price}</p>
              <p>{category}</p>
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
