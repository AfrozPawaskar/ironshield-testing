import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
