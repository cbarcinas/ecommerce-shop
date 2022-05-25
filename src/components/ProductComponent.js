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
          <div className="mt-[6em]">
            <div>
              <img src={image} alt={title} />
            </div>
            <div>
              <div>{title}</div>
              <div>${price}</div>
              <div>{category}</div>
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
