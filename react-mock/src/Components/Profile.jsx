import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Profilepage (){

    return(

       <>
        <Navbar />

       <div className="text-center mt-5">
        <h1>it Will be designed Soon</h1>
        <h3>Profile page</h3>
        <Link to={"/"} ><h5>Back to home</h5></Link>
       </div>
       
        
        </>
    )
}

export default Profilepage