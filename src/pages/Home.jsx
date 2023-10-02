import React from "react"
import HomeTitle from "../components/HomeTitle"

const Home = () => {
    return(
        <div>
            <div style={{display: "flex",alignItems: "Center",justifyContent: "center",marginTop:"50px"}}><HomeTitle greeting="Bienvido a Familia Futbol" /></div>
            <div style={{display: "flex",alignItems: "Center",justifyContent: "center",fontSize:"35px",marginTop:"20px", fontWeight:"100px" }}><HomeTitle greeting="TU LUGAR FUTBOLERO" /></div>
        </div>

    )
}

export default Home

