import Footer from "@/components/Shared/Footer";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-[200px]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
