import React from "react";
import ItemListContainer from "../components/items/ItemListContainer";
import ItemDetailContainer from "../components/Details/ItemDetailContainer";
import { Router, Routes } from "react-router-dom";
import Details from "./Details";


const Store = () => {
  return (
    <div>
     <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
};

export default Store;