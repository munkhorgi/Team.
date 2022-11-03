import React from "react"
import { useParams } from "react-router-dom"; 
 
const Service = () => {
    const {userId} = useParams();
    return <div>Sign Up</div>;
}
export default Service;