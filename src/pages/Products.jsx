import React from "react"
import { useParams } from "react-router-dom";
import Header from "../components/Header";

    const Product = () => {
        const {userId} = useParams();
    return (
        <Header></Header>
    
    )
}
export default Product;