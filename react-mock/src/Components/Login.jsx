import { useEffect, useState } from "react"
import axios from "axios"

import { useNavigate} from "react-router-dom"
//import images
import logo from "../assets/Myntralogo.png"
import girllogo from "../assets/loginImage.jpg"
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
    if(userreq.useremail===loginsecurity.username){
         Navigate("/home")
        console.log("Correct Authentication")
        alert("Login Succesfully")
    }else{
        console.log("wrong Authentication")
        alert("user Details Must")
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