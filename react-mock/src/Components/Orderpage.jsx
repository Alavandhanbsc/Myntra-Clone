// import useSelector 
import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import { useDispatch } from "react-redux";


// import needed emojis
import { TbTruckDelivery } from "react-icons/tb";
import { useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import emptyhistory from "../assets/emptyhistory.jpg"



function Orderpage (){

    const dispatch = useDispatch()
    const usenavigate = useNavigate()


    const orderlist = useSelector((state)=>state.Order.orderlist)
    console.log(orderlist)

    const totalPrice = orderlist.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalmrp = orderlist.reduce((acc, item) => acc + (item.mrp * item.quantity), 0);

    const totalItems = orderlist.reduce((acc, item) => acc + item.quantity, 0);
    const totalDiscount = orderlist.reduce((acc, item) => acc + (item.discount * item.quantity), 0);
    const averageDiscount = totalItems > 0 ? (totalDiscount / totalItems) : 0;

    
    


    return(
       <>
       <Navbar/>
       
       {orderlist.length===0?(
        <>
        <div className="orderpageemptydiv">
            <img className="orderpagenoproductimg" src={emptyhistory} />
        </div>
            <Link style={{textDecoration:"none"}} to={"/mens"}><h5 style={{color:"blue",fontFamily:"sans-serif",textAlign:"center"}}>Click to Start Purchasing...!</h5></Link>
        </>
       ):(
        <>
        <button className="orderhistorybtn"
        onClick={()=>{usenavigate("/orderhistory"); }}
        >Browse Order History</button>


        <h1 className="orderpagesuccessmessage">🥳Order Succesfully placed🎉</h1>
        <div className="orderpagediv">

        {orderlist.map((value,index)=>{
            return(
                
                

                    <div className="orderitemdiv" key={index}>
                    <img src={value.image} alt="" />
                       
                            
                            <table className="orderlisttable">
                                <tr>
                                    <td>Brand :</td> <td style={{fontWeight:"700"}}>{value.brand}</td> 
                                </tr>
                                <tr>
                                    <td>MRP :</td> <td style={{textDecorationLine: "line-through",textDecorationColor: "red" , color:"grey"}}>₹ {value.mrp}</td> <td></td> <td style={{color:"grey"}}> {value.discount} %OFF/-</td>
                                </tr>
                                <tr>
                                    <td>Price :</td> <td>₹ {value.price}</td> <td></td>  <td style={{color:"grey"}}> Delivered in {value.rating.toString().split(".")[1]} Days <TbTruckDelivery/> </td>
                                </tr>
                               
                            </table>
                            
                        
                    </div>

           
            

            )
        })}

            <div className="orderdetails">
                 <h4>Order Details</h4>
                <table className="orderdetailstable">
                    <tr>
                        <td>No of products :</td>  <td>{orderlist.length}</td>
                    </tr>
                    <tr>
                        <td>Total MRP :</td> <td style={{textDecorationLine:"line-through",textDecorationColor:"red"}}>₹ {totalmrp}</td>
                    </tr>
                    <tr>
                        <td>Avg.Discount :</td> <td style={{color:"grey"}}>{averageDiscount}% Off/-</td>
                    </tr>
                    <tr>
                        <td>Total Price :</td> <td>₹ {totalPrice}</td>
                    </tr>
                     <tr>
                        <td>Delivery Fees :</td> <td>+ ₹40</td>
                    </tr>
                    <tr>
                        <td>Final Cash :</td> <td style={{fontWeight:"800",color:"black"}}> ₹{totalPrice+40} </td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </table>
                    <Link style={{textDecoration:"none"}} to={"/mens"}><h5 style={{color:"blue",fontFamily:"cursive"}}>Continue Purchasing</h5></Link>
             </div>


             </div>


             
        </>
       )}

       

       </>
    )
}

export default Orderpage