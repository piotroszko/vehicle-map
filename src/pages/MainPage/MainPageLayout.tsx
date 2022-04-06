import React, { createContext } from "react";
import MainPageView from "./sections/MainPageView";
import Navbar from "./sections/Navbar";
import "./styles/MainPage.css";
import FilterContextProvider from "./../../contexts/FilterContextProvider";

const MainPageLayout = () => {
  return (
    <div className="MainPage">
      <FilterContextProvider>
        <Navbar></Navbar>
        <MainPageView></MainPageView>
      </FilterContextProvider>
    </div>
  );
};

export default MainPageLayout;
