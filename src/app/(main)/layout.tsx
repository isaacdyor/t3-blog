import React from "react";
import Navbar from "@/components/navbar/Navbar";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
