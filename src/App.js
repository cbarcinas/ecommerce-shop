import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/ShoppingCart";

function App() {
  return (
    // Create application routing
    <div className="App">
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          {/* productId used by useParams in <ProductDetails/>  */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
