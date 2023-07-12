import React from "react";
import PublicLayoutHeader from "./PublicLayoutHeader";
import PublicLayoutFooter from "./PublicLayoutFooter";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <PublicLayoutHeader />
      {children}
      <PublicLayoutFooter />
    </div>
  );
};

export default PublicLayout;
