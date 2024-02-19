import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "../components/layout";
import HomePage from "../pages/home";
import ShopPage from "../pages/shop";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import ProductPage from "../pages/product";
import BlogsPage from "../pages/blogs";
import TeamPage from "../pages/team";
import ArticlePage from "../pages/blogs/ArticlePage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import NotFoundPage from "../pages/notfound";
import ProductPage2 from "../pages/product/ProductPage2";
import Cart from "../pages/cart";
import Likes from "../pages/cart/Likes";

const PageRoutes = () => {
  if (localStorage.getItem("signIn") != "true") {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="auth/signin" element={<SignIn />} />
          <Route path="auth/signup" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="product" element={<ProductPage2 />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:id" element={<ArticlePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="likes" element={<Likes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
