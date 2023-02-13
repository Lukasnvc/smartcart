import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CategoryPage from "../Pages/CategoryPage";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import CheckOutPage from "../Pages/CheckOutPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="category/:name" element={<CategoryPage />} />
      <Route path="category/:name/:id" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CheckOutPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Routers;
