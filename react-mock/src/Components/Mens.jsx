import { useEffect, useState } from "react"
// import needed emojies
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
//navbar
import Navbar from "./Navbar";
//axios
import axios from 'axios' 
//toastify for popup message
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
//redux functions
import {useDispatch} from "react-redux"
import { AddtoCart } from "../Redux/Cartslice";
import { AddtoWishlist,RemoveWishlist } from "../Redux/WishlistSlice";
import {Sortbyprice,Setmensitem} from "../Redux/SortSlice"
import {useSelector} from "react-redux"


function Menspage() {

    // declare a variable name for useDispath()
    const dispatch = useDispatch()
    //useSelectors
    const product = useSelector((state)=>state.Sort.sorteditems)
    const {wishlist} = useSelector((state) => state.wishlist)
    const {cart} =useSelector((state)=>state.cart)

    console.log(wishlist) //to check if wishlist get items or not

    // for heart color change
    const [wishlists, setWishlists] = useState({})

     
    const url = "http://localhost:3001/products"

    useEffect(() => {
        const mensfetch = async () => {
            const fetch = await axios.get(url)
            dispatch(Setmensitem(fetch.data))   // store data in redux 

        }
        mensfetch()
    }, [])

    console.log(product)

        const changewishlistcolor = (index) => {
            setWishlists((prev) => ({
                ...prev,
                [index]: !prev[index], // toggle wishlist state for that item
                
            }));
        };
 

    return (

        <>
            <Navbar />

            {/* for search function */}
             <select name="sort" id="" className='menspagesort' onChange={(e)=>{dispatch(Sortbyprice(e.target.value))}} >
                    <option value="" selected disabled>To Sort By</option>
                    <option value="low-to-high">Low-to-High</option>
                    <option value="high-to-low">High-to-Low</option>
                    <option value="withoutsort">Without-Sort</option>
                </select>

            <div className="productpage">

                {product.map((res, index) => {
                    return (

                        <>
                        <div className="product-div mt-5" key={index}>
                            
                            <img src={res.imgURIs[0]} />

                            <table className="mt-3" style={{ width: "80%", marginLeft: "45px", }}>
                                <tr>
                                     <th>{res.brand}</th>
                                </tr>
                                
                                <tr>
                                    <td className="sample">For {res.category}</td> 
                                </tr> 
            
                                <tr>
                                    <th style={{color:"red", textDecoration: "line-through"}}>₹{res.MRP}</th>
                                    <th style={{color:"grey"}}>({res.discount} % Off)</th>                                   
                                </tr>

                                     <th>₹{res.price}</th>
                            </table>

                            <button className="addcartbutton mb-3" onClick={()=>{
                              const inCart = cart.some(inlist=>inlist.id===res.id) //declare a variale for cart . is id here or not
                               if(inCart){
                                toast.error("Already Added")
                               }else{
                                 dispatch(AddtoCart({
                                                    image:res.imgURIs[0],
                                                    brand:res.brand,
                                                    id:res.id,
                                                    price:res.price,
                                                    category:res.category,
                                                    rating:res.rating,
                                                    mrp:res.MRP,
                                                    discount:res.discount
                                                })) ,
                                toast.success("✅ Product added to cart!")                                                                                         
                               }
                            }}> {cart.some(update=>update.id===res.id)?<p style={{display:"inline",color:"yellow",fontWeight:"600"}}>Added</p> : <p style={{display:"inline" }}>Add to cart</p>}  </button>
                            

                            {/*wishlist button*/}
                            <button onClick={()=>{
                                const inWishlist = wishlist.some(now=>now.id===res.id)
                                if(inWishlist){
                                    dispatch(RemoveWishlist({id:res.id}))
                                    
                                }else{
                                    changewishlistcolor(index),
                                    dispatch(AddtoWishlist({
                                    image:res.imgURIs[0],
                                    brand:res.brand,
                                    price:res.price,
                                    category:res.category,
                                    id:res.id,
                                    rating:res.rating,
                                }))
                                }     
                            }} className="addwishlistbutton"  > 

                              <div >
                                
                            <p className="menspagerating">{res.rating}<FaStarHalfAlt style={{color:"yellow"}}/> </p></div>
                              <h5>{wishlist.some(item=>item.id===res.id)?<FaHeart style={{color:"red"}}/> : <FaRegHeart/>}</h5>
                            </button>

                        </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Menspage 