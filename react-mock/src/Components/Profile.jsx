
import Navbar from "./Navbar";
import profileimage from "../assets/Profilewallpaper.png"
import { Link } from "react-router-dom";

function Profilepage (){

    return(

       <div style={{backgroundColor:"rgba(255, 138, 185, 1)",height:"100vh"}}>
        <Navbar />

       <div>
        <div className="profilediv">
        
        <table className="profiletable">
            <tr>
                <td style={{fontWeight:"700"}}>User Name </td> <td style={{textDecoration:"underline",textDecorationColor:"rgba(237, 24, 105, 1)",textUnderlineOffset:"5px"}}>Alavandhan A</td>
            </tr>
            <tr>
                <td style={{fontWeight:"700"}}>Phone </td>     <td style={{textDecoration:"underline",textDecorationColor:"rgba(255, 0, 115, 1)",textUnderlineOffset:"5px"}}>+91 7604810984</td>
            </tr>
            <tr>
                <td style={{fontWeight:"700"}}>E-mail </td>    <td style={{textDecoration:"underline",textDecorationColor:"rgba(255, 0, 115, 1)",textUnderlineOffset:"5px"}}>alavanthan@gmail.com</td>
            </tr>
            <tr>
                <td style={{fontWeight:"700"}}>Adress </td>     <td style={{textDecoration:"underline",textDecorationColor:"rgba(255, 0, 115, 1)",textUnderlineOffset:"5px"}}>Ram nagar, Madipakkam,Chennai</td>
            </tr>

            <Link style={{textDecoration:"none"}} to={"/mens"}><button style={{border:"none",backgroundColor:" #ff0062ff",borderRadius:"5px",padding:"5px",marginBottom:"10px",color:"white",fontFamily:"sans-serif",textAlign:"center"}}>Back Home</button></Link>
        </table>

       </div>
       </div>
       
        
        </div>
    )
}

export default Profilepage