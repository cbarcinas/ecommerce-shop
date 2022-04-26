import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  // import our products state
  const products = useSelector((state) => state.setProducts);

  // create a variable containing our map function to pass into our jsx
  const renderList = products.setProducts.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four column wide" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  // return map inside our jsx
  return <>{renderList}</>;
};

export default ProductComponent;
