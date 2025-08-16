// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// // import { AddtoCart } from "../../Redux/CartSlice";
// import { useSelector } from "react-redux";
// import {useDispatch} from 'react-redux'
// import { RemoveCart } from "../../Redux/CartSlice";

// //import icons
// import { TbShoppingCartX } from "react-icons/tb";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { useState } from "react";




// function Cartpage (){
//     const Addingelement = useSelector(state=>state.cart.cart)
    
//     //state for the item price
//     const [itemquantity,setItemquantity] = useState(0)


    
// const dispatch = useDispatch()
//     return(

//        <>
//         <Navbar />
        


//         {Addingelement.length===0 ?(
//            <div>
//             <h1 style={{textAlign:"center",marginTop:"10%"}}>{<TbShoppingCartX style={{color:"lightGrey",fontSize:"200px",}}/>}</h1>
//              <h4 style={{color:"grey",textAlign:"center"}}>Page is Empty please Select some Items</h4>
//            </div>
//         ) :(

//              Addingelement.map((item,index)=>{

//         return(
//             <div  className="product-div mt-5" key={index}>

//                 <img style={{width:"100%",borderRadius:"5px"}} src={item.image} />
//                  <table className="mt-3" style={{ width: "60%", marginLeft: "45px", }}>
//                                 <tr>
//                                     <th>Brand :</th> <td>{item.brand}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Catogory :</th> <td>{item.category}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Price :</th> <td>₹{item.price}</td>
//                                 </tr>

//                                 <tr>
                                   
//                                 <td><button onClick={()=>{setItemquantity(item.quantity+1)}}>+</button></td> <td>{item.price*itemquantity}</td>
//                                 </tr>
//                             </table>
//                              <div className="rating">{item.rating}<FaStarHalfAlt style={{color:"yellow"}}/></div>
//                             <button className="removecart" onClick={()=>dispatch(RemoveCart({id:item.id}))}>Remove From Cart</button>
//             </div>
//         )
//       })
            
//         )}

     
       
        

//         </>
//     )
// }

// export default Cartpage




//import navbar
import Navbar from "./Navbar";

//import redux functions
import { RemoveCart, IncQuantity, DecQuantity } from "../Redux/Cartslice";


//import Usedispatch()
import { useSelector, useDispatch } from "react-redux";

//import needed images for our page 
import { TbShoppingCartX } from "react-icons/tb";
import { FaStarHalfAlt } from "react-icons/fa";


function Cartpage() {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      {cartItems.length === 0 ? (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "10%" }}>
            <TbShoppingCartX style={{ color: "lightGrey", fontSize: "200px" }} />
          </h1>
          <h4 style={{ color: "grey", textAlign: "center" }}>Page is Empty please Select some Items</h4>
        </div>
      ) :
      
      (
        cartItems.map((item, index) => (
          <div className="product-div mt-5" key={index}>
            <img style={{ width: "100%", borderRadius: "5px" }} src={item.image} />
            <table className="mt-3" style={{ width: "60%", marginLeft: "45px" }}>

              <tbody>

                <tr>
                  <th>Brand :</th> <td>{item.brand}</td>
                </tr>

                <tr>
                  <th>Category :</th> <td>{item.category}</td>
                </tr>

                <tr>
                  <th>Price :</th> <td>₹{item.price}</td>
                </tr>

                <tr>
                  <td>
                         <button className="quanbutton" onClick={() => dispatch(DecQuantity(item.id))}>-</button>
                       
                        <p style={{ display:"inline", margin: "0 10px" }}>{item.quantity}</p>

                       <button className="quanbutton" onClick={() => dispatch(IncQuantity(item.id))}>+</button>
                  </td>
                        <td>₹{item.price * item.quantity}</td>
                </tr>

              </tbody>
            </table>


            <div className="rating">
              {item.rating}<FaStarHalfAlt style={{ color: "yellow" }} />
            </div>

            <button className="removecart" onClick={() => dispatch(RemoveCart({ id: item.id }))}>
              Remove From Cart
            </button>

          </div>
        ))
      )}
    </>
  );
}

export default Cartpage;
