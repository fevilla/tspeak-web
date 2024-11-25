import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen">
      <Navbar />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
