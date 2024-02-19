import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
Layout.propTypes = {
  window: PropTypes.func,
};
export default Layout;
