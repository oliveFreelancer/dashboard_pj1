import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative" style={{ height: "calc(100vh - 80px)" }}>
      {children}
    </div>
  );
};

export default MainLayout;
