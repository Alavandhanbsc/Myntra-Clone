
import Navbar from "./Navbar";
import profileimage from "../assets/Profilewallpaper.png"
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Profilepage (){
    const navigate = useNavigate()

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

            
            <tr>
                <td><Link style={{textDecoration:"none"}} to={"/mens"}><button style={{border:"none",width:"60%",backgroundColor:" #ff0062ff",borderRadius:"5px",padding:"5px",marginBottom:"10px",color:"white",fontFamily:"sans-serif",textAlign:"center"}}>Back </button></Link></td>
                <td><button style={{border:"none",backgroundColor:" skyblue",borderRadius:"5px",padding:"5px" ,width:"40%",marginBottom:"10px",color:"black",fontFamily:"sans-serif",textAlign:"center"}} onClick={()=>{
                    Swal.fire({
                            title: "Confirm to Log Out!",
                            text: 'Click "Confirm" to Log Out',
                            icon:"question",
                            showCancelButton:true,
                            confirmButtonText: "Log Out",
                            confirmButtonColor:"red",
                            cancelButtonText:"Not now",
                            cancelButtonColor:"skyblue"
                            }).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/")
                                }
                            });
                }}>Log Out</button></td>
            </tr>
        </table>

       </div>
       </div>
       
        
        </div>
    )
}

export default Profilepage











                    