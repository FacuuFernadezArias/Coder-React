import React from "react";
import ItemListContainer from "../components/Items/ItemListContainer";
// import ItemDetailContainer from "../components/Details/ItemDetailContainer";
import Advertisings from "../components/items/Advertisings"
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Store = () => {


  return (
    <div>
      <Advertisings/>
        <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
    </div>
  );
};

export default Store;