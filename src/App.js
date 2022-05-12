import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    // Create application routing
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          {/* productId used by useParams  */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
