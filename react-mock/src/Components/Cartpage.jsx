
//import navbar
import Navbar from "./Navbar";

//import redux functions
import { RemoveCart, IncQuantity, DecQuantity } from "../Redux/Cartslice";


//import Usedispatch()
import { useSelector, useDispatch } from "react-redux";

//import needed images for our page 
import { TbShoppingCartX } from "react-icons/tb";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import { FaHandPointLeft } from "react-icons/fa";


function Cartpage() {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  //
  const [hoveredimage,setHoweredimage] = useState(null)

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
          
          <div className="cartproductdiv" key={index}>

            <div className="cartpageimgdiv" onMouseEnter={()=>{setHoweredimage(item.image)}} onMouseLeave={()=>{setHoweredimage(null)}}>
                <img className="cartpageimg" src={item.image} />
                <div className="rating">
                  {item.rating}<FaStarHalfAlt style={{ color: "yellow" }} />
                </div>
            </div>

            <div className="cartpagetablediv">
            <table className="cartpagetable" >

              <tbody>

                <tr>
                  <th>Brand :</th> <td>{item.brand}</td>
                </tr>

                <tr>
                  <th>Category :</th> <td>{item.category}</td>
                </tr>

                <tr>
                  <th style={{color:"red", textDecoration: "line-through"}}>₹{item.mrp}</th>
                                     <th style={{color:"grey"}}>({item.discount} % Off)</th> 
                </tr>

                <tr>
                  <th>Price :</th> <td>₹{item.price}</td>
                </tr>

                <tr>
                   <th>Quantity :</th>
                        
                  <td> <button className="quanbutton" onClick={() => dispatch(DecQuantity(item.id))}>-</button>
                       
                        <p style={{ display:"inline", margin: "0 10px" }}>{item.quantity}</p>

                       <button className="quanbutton" onClick={() => dispatch(IncQuantity(item.id))}>+</button>
                    
                       <p className="d-inline p-3">₹{item.price * item.quantity}</p>
                       
                       </td>
                </tr>

                 <tr> <td> </td> 

                      <td > 
                        <button className="cartremovebutton" onClick={() => dispatch(RemoveCart({ id: item.id }))}>
                      Remove From Cart
                        </button> 
                      </td> 
                </tr>

 
              </tbody>

           
            </table>


            

            </div>


            {hoveredimage!==null ?(
              <div className="inspectimgdiv show">
             <img className="inspectimg" src={hoveredimage} />
            </div>
            
            ):(
               <div className="inspectimgdivempty">
                <FaHandPointLeft style={{fontSize:"20px"}}/>  Tab the image To Preview 
            </div>
            )}

          </div>
        ))
      )}
    </>
  );
}

export default Cartpage;

