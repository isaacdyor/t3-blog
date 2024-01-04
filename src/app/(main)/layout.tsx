import React from "react";
import Navbar from "@/components/navbar/Navbar";
import AuthComponent from "@/components/navbar/AuthComponent";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <Navbar>
        <AuthComponent />
      </Navbar>
      {children}
    </>
  );
};

export default RootLayout;
