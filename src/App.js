import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/ShoppingCart";

function App() {
  return (
    // Create application routing
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          {/* productId used by useParams in <ProductDetails/>  */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
