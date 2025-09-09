import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SubHeader from "../../components/subHeader";

const MainLayout = () => {
  return (
    <>
      <SubHeader/>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
