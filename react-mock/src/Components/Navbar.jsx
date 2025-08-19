
import { Link } from 'react-router-dom'
import logo from '../assets/Myntralogo.png'

// logos for navbar
import { FaRegHeart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux'

//import useDispatch()
import {useDispatch} from "react-redux"

import { Filterbybrand } from '../Redux/SortSlice';

function Navbar (){

    const dispatch = useDispatch()

    const Cartcount = useSelector(state=>state.cart.cart)
    const wishlistcount =useSelector(state=>state.wishlist.wishlist)
    return(
        <nav className= " bg-light navbardiv">
            <nav>  
         <Link to={"/"}  style={{ textDecoration: 'none'}}> <img src={logo} alt="Myntra logo" /> </Link>

                 <h6>  
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><p>Mens</p></Link> 
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><p>Womens</p></Link> 
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><p>Kids</p></Link> 
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><p>Home</p></Link>  
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><p>Beauty</p></Link> 
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><p>Genz</p></Link> 
                    <Link to={"/mens"}  style={{ textDecoration:'none'}}  ><p>Studio</p></Link> 
                    
                 
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
                       
                       <Link to={"/wishlist"}  style={{ textDecoration:'none'}}  ><h4 style={{paddingLeft: "20px" }}>{<FaRegHeart style={{color:'black'}}/> }</h4><br /></Link> 
                       <p>Wishlist</p>
                    </div>  


                    
                    <div style={{paddingLeft:"65px"}}>

                        <div>{Cartcount.length===0 ?("") :(<div> <h4 className='addcartcount'>{Cartcount.length}</h4> </div>)}</div>
                      <Link to={"/cartpage"}  style={{ textDecoration:'none'}}  > <h4 ><FaShoppingCart style={{color:"black"}} /></h4><br /></Link>  
                        <p>Bag</p>
                    </div>  
                </h6> 

            </nav>
           
        </nav>
    )
}

export default Navbar