
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Myntralogo.png'

// logos for navbar
import { FaRegHeart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import {useSelector} from 'react-redux'


//import useDispatch()
import {useDispatch} from "react-redux"

import { Filterbybrand } from '../Redux/SortSlice';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

function Navbar (){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Cartcount = useSelector(state=>state.cart.cart)
    const wishlistcount =useSelector(state=>state.wishlist.wishlist)
    return(
        <nav className= " bg-light navbardiv">
            <nav>  
         <Link to={"/home"}  style={{ textDecoration: 'none'}}> <img style={{width:"80px",paddingLeft:"10px"}} src={logo} alt="Myntra logo" /> </Link>

                 <h6 className='categorynames'>  
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><span className='categorymenunames'>Mens</span></Link> 
                    <Link to={"/Womens"}  style={{ textDecoration:'none'}}  ><span className='categorymenunames'>Womens</span></Link> 
                    <Link to={"/kids"}  style={{ textDecoration:'none'}}  ><span className='categorymenunames'>Kids</span></Link> 
                    <Link to={"/homeappliance"}  style={{ textDecoration:'none'}}  ><span className='categorymenunames'>Home</span></Link>  
                    <Link to={"/beauty"}  style={{ textDecoration:'none'}}  ><span className='categorymenunames'>Beauty</span></Link> 
                    <Link to={"/genz"}  style={{ textDecoration:'none'}}  ><span className='categorymenunames'>Genz</span></Link> 
                    <Link to={"/studio"}  style={{ textDecoration:'none'}}  ><span className='categorymenunames'>Studio</span></Link> 
                    
                 
                 </h6> 

                <h3 className="search-icon">⌕</h3>
                <input className="navbarsearch" type="search" onChange={(e)=>{dispatch(Filterbybrand(e.target.value))}} placeholder= "Seach for Products,brands and More"/> 

        
                

                 <h6 className="navemoji"> 
                    <div>
                        <Link to={"/profile"}  style={{ textDecoration:'none'}}  ><h4  style={{fontSize:"25px",paddingLeft:"10px"}}><IoMdContact style={{color:"black"}}/></h4><br/></Link>
                        <p>Profie</p>
                    </div>
                    
                    <div  style={{paddingLeft:"20px"}} >
                        <div>
                            {wishlistcount.length===0 ?(""):(<div><h4 className='wishlistcount'>{wishlistcount.length}</h4><br /></div>)}
                        </div>
                       
                       <Link to={"/wishlist"}  style={{ textDecoration:'none'}}  ><h4 style={{paddingLeft: "20px" ,position:"relative",right:"63px"}}>{<FaRegHeart style={{color:'black'}}/> }</h4><br /></Link> 
                       <p>Wishlist</p>

                     </div>  


                    
                    <div style={{paddingLeft:"60px"}}>

                        <div>{Cartcount.length===0 ?("") :(<div> <h4 className='addcartcount'>{Cartcount.length}</h4> </div>)}</div>
                      <Link to={"/cartpage"}  style={{ textDecoration:'none',position:"relative",right:"63px"}}  > <h4 ><FaShoppingCart style={{color:"black"}} /></h4><br /></Link>  
                        <p>Bag</p>
                    </div> 

                    <div style={{paddingLeft:"20px"}}>
                      <Link   style={{ textDecoration:'none',position:"relative",left:"15px"}}  > <h4 ><FaPowerOff style={{color:"red",fontSize:"20px"}} onClick={()=>{
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
                      }} /></h4><br /></Link>
                      <p style={{marginLeft:"0px"}}>LogOut</p>  
                    </div>  
                </h6>

            </nav>
            
           <ToastContainer position="top-right" autoClose={2000} />
           
        </nav>
    )
}

export default Navbar