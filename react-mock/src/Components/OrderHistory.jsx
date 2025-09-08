import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptyhistory from "../assets/emptyhistory.jpg"
import Navbar from "./Navbar";
import { TbTruckDelivery } from "react-icons/tb";


function Orderhistory() {
  const orderhistory = useSelector((state) => state.OrderHistory.history) || [];
  console.log(orderhistory);

  

  return (

    <>
    <Navbar />
    <div className="emptyhistory order-history-container">
      {orderhistory.length === 0 ? (
        <div className="emptymessage">
          <img style={{width:"500px"}} className="mt-5 " src={emptyhistory} alt="No History" />
        </div>
      ) : (
        orderhistory.map((order, orderIndex) => {
          
            const totalPrice = order.reduce((acc, item) => acc + (item.price * item.quantity), 0);
              return(
          <div className="historywholediv" key={orderIndex}>
            
                <div className="orderhistorylist">
                    <h4 className="historyordertitle">Order #{orderIndex + 1}</h4>
                {order.map((item, itemIndex) => (
                    <>
                    <div key={itemIndex} className="historyordereachproduct">
                      <img src={item.image} alt="Order Item" className="orderhistoryimage" />
                      <table className="orderhistoryproducttable">
                        <tr>
                            <td>Brand :</td> <td>{item.brand}</td>
                        </tr>
                        <tr>
                            <td>MRP :</td> <td style={{textDecorationLine:"line-through",textDecorationColor:"red"}}>₹ {item.mrp}</td> <td style={{color:"grey"}}>{item.discount}% Off/-</td>
                        </tr>
                        <tr>
                            <td>Price :</td> <td>₹ {item.price}</td>
                        </tr>
                      </table>
            
                   </div>
                   
                   </>
              ))}
              <table>
                <tr>
                    <td >Total price :</td> <td style={{paddingRight:"20px"}}> ₹{totalPrice}</td> <td>Delivery Expected in {orderIndex+3} Days <TbTruckDelivery /> </td>
                </tr>
              </table>
              
               </div>
          </div>
              )
            
})
      )}

      <Link style={{textDecoration:"none"}} to={"/mens"}><button className="backtohome" style={{fontFamily:"sans-serif",textAlign:"center"}}>Back to Home</button></Link>
    </div>
    </>
  );
}

export default Orderhistory;
