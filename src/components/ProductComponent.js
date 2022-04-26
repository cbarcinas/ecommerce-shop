import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  // import our products state
  const products = useSelector((state) => state.products.setProducts);
  //
  const renderList = products.map((product) => {
    return (
      <div className="four column wide">
        <div className="ui link cards">
          <div className="card">
            <div className="image"></div>
            <div className="content">
              <div className="header"></div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ProductComponent;
