import React from "react"
import HomeTitle from "../components/items/HomeTitle";
import CarouselHome from "../components/items/CarouselHome";

const Home = () => {
    return(
        <div>
            <CarouselHome/>
            <div style={{display: "flex",alignItems: "Center", fontSize:"25px", fontWeight:"100px", justifyContent: "center",marginTop:"25px"}}><HomeTitle greeting="Bienvenido a FAMILIA FUTBOL" /></div>
            <div style={{display: "flex",alignItems: "Center",justifyContent: "center",fontSize:"50px",marginTop:"5px", fontWeight:"160px", marginBottom:"50px" }}><HomeTitle greeting="LO MEJOR DEL FUTBOL" /></div>
        </div>
    )
}

export default Home
