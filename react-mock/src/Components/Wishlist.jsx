
import Navbar from './Navbar';
import {useSelector} from 'react-redux'
import { FaStarHalfAlt } from "react-icons/fa";

import {useDispatch} from 'react-redux'
import { RemoveWishlist } from "../Redux/WishlistSlice";

// import icons
import { GiBrokenHeartZone } from "react-icons/gi";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import emptywishlist from "../assets/No-produc.png"


function Wishlist (){
    const Addwishlist = useSelector(state => state.wishlist.wishlist);
const dispatch = useDispatch()


    return(

       <>
       <Navbar />

        {Addwishlist.length===0 ?(
            <>
           <div className="orderpageemptydiv">
                       <img className="orderpagenoproductimg " style={{width:"500px"}} src={emptywishlist} alt="" />
            </div>
                       <Link style={{textDecoration:"none"}} to={"/mens"}><h5 style={{color:"blue",fontFamily:"sans-serif",textAlign:"center"}}>Click to Start Purchasing...!</h5></Link>
          
           
           </>
        ) :(


                Addwishlist.map((item,index)=>{

        return(
            <div  className="wishlistproduct-div mt-5" key={index}>

               
                <img className='wishlistimg' src={item.image} />
                <div className="wishlistrating">{item.rating}<FaStarHalfAlt style={{color:"yellow"}}/></div>

                            <table className='wishlisttable'>
                                <tr>
                                    <td >Brand</td > <td className='wishpagetdbold' >{item.brand}</td>
                                </tr>

                                <tr>
                                    <td >Catogory</td> <td className='wishpagetdbold'>For {item.category}</td>
                                </tr>

                                <tr>
                                    <td >Price</td> <td className='wishpagetdbold'>{item.price}</td>
                                </tr>
                            </table>

                    <button className="removewishlist" onClick={()=>{dispatch(RemoveWishlist({id:item.id}));
                                                            Swal.fire({
                                                                toast: true,
                                                                position: "bottom-end",
                                                                icon: "info",
                                                                title: "Item removed !",
                                                                showConfirmButton: false,
                                                                timer: 2000,
                                                                timerProgressBar: true,
                                                            });}}>Remove Wishlist</button>
                </div>
        )
      })


        )}

    
        </>
    )
}

export default Wishlist