
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

                    <button className="removewishlist" onClick={()=>dispatch(RemoveWishlist({id:item.id}))}>Remove Wishlist</button>
                </div>
        )
      })


        )}

       

       
        </>
    )
}

export default Wishlist