import { Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/category/:name/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
