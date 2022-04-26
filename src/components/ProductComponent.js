import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  // import our products state
  const products = useSelector((state) => state.allProducts.products);
  // We need to access id and title by destructuring it
  // from our products array.
  // const { title } = products[0];
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            {/* <div className="header">{title}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
