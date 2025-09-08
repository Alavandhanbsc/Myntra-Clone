import { useEffect, useState } from "react"
import axios from "axios"

import { useNavigate} from "react-router-dom"
//import images
import logo from "../assets/Myntralogo.png"
import girllogo from "../assets/loginImage.jpg"
import Swal from "sweetalert2";
import { toast } from "react-toastify"
import { Toast } from "bootstrap"

function Login (){

    const [loginsecurity,setLoginsecurity] = useState({username:"",password:""})
    const [userreq,setUserreq] = useState({useremail:"",userpassword:""})

    const url = "http://localhost:3001/security"
    const Navigate = useNavigate()

    useEffect(()=>{

       const getlogindata = async()=>{
       const fetchsecurity = await axios.get(url)
       try{
            setLoginsecurity({username:fetchsecurity.data.username,password:fetchsecurity.data.password})
       }catch(error){
        console.log("Error from login fetch :",error)
       }
       }
       
       getlogindata()
    },[])

   

   const checkuser = (e)=>{
    e.preventDefault()
    console.log("From Customer :",userreq.useremail,userreq.userpassword)
    console.log("From API :",loginsecurity.username,loginsecurity.password)
    if(userreq.useremail===loginsecurity.username&userreq.userpassword===loginsecurity.password){
         Navigate("/home")
        console.log("Correct Authentication")
        Swal.fire({
                    title: "Success!",
                    text: "Login Succesfully",
                    icon: "success",
                    confirmButtonText: "OK",
            });
    }
    else if(userreq.useremail===""&userreq.userpassword===""){
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please enter E-mail and Password",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
    }else if(userreq.useremail===""&userreq.userpassword===loginsecurity.password){
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "E-mail is must!",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
    }else if(userreq.useremail===loginsecurity.username&userreq.userpassword===""){
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Password is Must",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
    }
    else if(userreq.useremail!==loginsecurity.username&userreq.userpassword===loginsecurity.password){
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Invalid E-mail",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
    }else if(userreq.useremail===loginsecurity.username&userreq.userpassword!==loginsecurity.password){
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Password doesn't match !",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
    }
        else{
        console.log("wrong Authentication")
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Invalid User!",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
    }
    
   }


    return(
        
        <div className="logindiv">
            <div className="loginformandimgdiv">
                

                <table>
                    <tr>
                        
                        <td style={{padding:"0px"}}>
                            <img className="loginlogo" src={logo}/> <span className="myntratext">Myntra</span> 
                                                                          
                        <form className="loginform">
                                <label htmlFor="useremail">E-mail :</label>
                                <input type="email" name="useremail" placeholder="Enter Your E-mail" onChange={(e)=>{setUserreq({...userreq,useremail:e.target.value})}} /> <br /> 

                                 <label htmlFor="userpassword">Password :</label>
                                <input type="password" name="userpassword" id="userpassword" placeholder="Enter Your password" onChange={(e)=>{setUserreq({...userreq,userpassword:e.target.value})}} /> <br />

                                <button className="loginbutton" onClick={checkuser} >Login</button>
                            </form>
                        </td>

                        <td style={{padding:"0px"}}><img className="akkalogo" src={girllogo} alt="" /></td>
                    </tr>
                </table>
                
 
            </div>
           
        </div>
       
    )

}
export default Login