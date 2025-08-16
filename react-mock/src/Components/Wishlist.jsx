
import Navbar from './Navbar';
import {useSelector} from 'react-redux'
import { FaStarHalfAlt } from "react-icons/fa";

import {useDispatch} from 'react-redux'
import { RemoveWishlist } from "../Redux/WishlistSlice";

// import icons
import { GiBrokenHeartZone } from "react-icons/gi";



function Wishlist (){
    const Addwishlist = useSelector(state => state.wishlist.wishlist);
const dispatch = useDispatch()



    return(

       <>
       <Navbar />

        {Addwishlist.length===0 ?(
           <div style={{textAlign:"center",marginTop:"10%"}}>
             <h1>{<GiBrokenHeartZone style={{fontSize:"200px",color:"lightgray"}} />}</h1>
            <h4 style={{color:"grey"}}>No items in Wishlist . Please select some</h4>
           </div>
        ) :(


                Addwishlist.map((item,index)=>{

        return(
            <div  className="product-div mt-5" key={index}>

               
                <img style={{width:"100%",borderRadius:"5px"}} src={item.image} />
                 <table className="mt-3 mb-3" style={{ width: "60%", marginLeft: "45px", }}>
                                <tr>
                                    <th>Brand :</th> <td>{item.brand}</td>
                                </tr>
                                <tr>
                                    <th>Catogory :</th> <td>{item.category}</td>
                                </tr>
                                <tr>
                                    <th>Price :</th> <td>₹{item.price}</td>
                                </tr>
                            </table>
                             <div className="rating">{item.rating}<FaStarHalfAlt style={{color:"yellow"}}/></div>
                            <button className="removecart" onClick={()=>dispatch(RemoveWishlist({id:item.id}))}>Remove From Wishlist</button>
            </div>
        )
      })


        )}

       

       
        </>
    )
}

export default Wishlist