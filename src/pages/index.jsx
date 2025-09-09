import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Error10 from "./not-found";
import Home from "./Home";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error10 />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default AppRouter;
