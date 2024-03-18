import React from "react";
import Footer from "../../../components/Shared/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-[200px]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
