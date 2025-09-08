
//import navbar
import Navbar from "./Navbar";

//import popup
import Swal from "sweetalert2";

//import redux functions
import { RemoveCart,ClearCart, IncQuantity, DecQuantity } from "../Redux/Cartslice";
import {storeorder} from "../Redux/Orderslice"
import {AddorderHistory} from "../Redux/OrderHistorySlice"


//import Usedispatch()
import { useSelector, useDispatch } from "react-redux";

//import needed images for our page 
import { FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";



function Cartpage() {
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

// fetch empty cart image from url
  const [emptycartimg,setEmptycartimg] = useState([])
  const url ="http://localhost:3001/icons"

  useEffect(()=>{
      const getdata =async()=>{
        const whole = await axios.get(url)
       setEmptycartimg(whole.data.emptyCart)
      }
      getdata()
      
  },[])

  console.log(emptycartimg)

  // declare a state for hover the cart div form preview
  const [hoveredimage,setHoweredimage] = useState(null)

  // create a variable for order card

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <Navbar />

      {cartItems.length === 0 ? (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "10%" }}>
            <img src={emptycartimg} alt="Cart Empty" />
          </h1>
          <h4 style={{ color: "grey", textAlign: "center",fontFamily:"cursive" }}>Cart is Empty</h4>
          <Link style={{textDecoration:"none"}} to={"/mens"}><h5 style={{color:"blue",fontFamily:"cursive",textAlign:"center"}}>Click to Start Purchasing...!</h5></Link>
        </div>
      ) :
      
      (
        cartItems.map((item, index) => (
          
          <div className="cartproductdiv" key={index}  onMouseEnter={()=>{setHoweredimage(item.image)}} onMouseLeave={()=>{setHoweredimage(null)}}>

            <div className="cartpageimgdiv">
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
                        <button className="cartremovebutton" onClick={() => {dispatch(RemoveCart({ id: item.id }));
                          Swal.fire({
                              toast: true,
                              position: "bottom-end",
                              icon: "info",
                              title: "Item removed !",
                              showConfirmButton: false,
                              timer: 2000,
                              timerProgressBar: true,
                          });}}>
                      Remove From Cart
                        </button> 
                      </td> 
                </tr>

 
              </tbody>

           
            </table>            

            </div>


            {hoveredimage!==null ?(
              <>
              <div className="inspectimgdiv show">
             <img className="inspectimg" src={hoveredimage} />
            </div>

            
            </>
            
            ):(
              
              null
            
            )}

          </div>

          

          
        ))
      )}

      {/* order Card */}

      {cartItems.length!==0?(
        <div className="ordercard">
          <h3>Order Summary</h3>
          <p>Total Items : {totalQuantity}</p>
          <p>Total price : ₹ {totalPrice}</p>
          
          
          <button onClick={()=>{
          Swal.fire({
            title: "Confirm to Order!",
            text: 'Click "Confirm" to Place the order',
            icon:"question",
            confirmButtonText: "Place Order",
            showCancelButton:true,
            cancelButtonText:"Not Now",
            cancelButtonColor:"skyblue",
            }).then((result) => {
              if (result.isConfirmed) {
                console.log("OK button clicked!");
                dispatch(AddorderHistory(cartItems));
                dispatch(storeorder(cartItems));
                dispatch(ClearCart());
                navigate("/orderpage")
                Swal.fire({
                  title: "success!",
                  text: 'Order placed succesfully ',
                  icon: "success",
                  confirmButtonText: "Ok",
                  
                })
                 }
              });
    
    }} >Place Order</button>
        </div>
      ):(
        <div></div>
      )}
    </>
  );
}

export default Cartpage;

