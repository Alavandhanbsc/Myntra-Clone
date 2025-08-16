import { useEffect, useState } from "react"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

import Navbar from "./Navbar";
import axios from 'axios'

import {useDispatch} from "react-redux"
import { AddtoCart } from "../Redux/Cartslice";
import { AddtoWishlist } from "../Redux/WishlistSlice";




function Menspage() {

    // declare a variable name for useDispath()
const dispatch = useDispatch()

    const [product, setProduct] = useState([])
    const [wishlist, setWishlist] = useState({})

    //useState for add to cart button
    const [disabled,setDisabled] = useState({})
    const [wishlistadd,setWishlistadd] = useState({})
    const url = "http://localhost:3001/products"

    useEffect(() => {
        const mensfetch = async () => {
            const fetch = await axios.get(url)
            setProduct(fetch.data)

        }
        mensfetch()
    }, [])

    console.log(product)

        const changewishlistcolor = (index) => {
            setWishlist((prev) => ({
                ...prev,
                [index]: !prev[index], // toggle wishlist state for that item
                
            }));
            
        };
 
        
    



    return (

        <>
            <Navbar />


            <div className="productpage">


                {product.map((res, index) => {
                    return (
                        <>
                        
                        <div className="product-div mt-5" key={index}>
                            
                          

                            <img src={res.imgURIs[1]} />


                            <table className="mt-3" style={{ width: "60%", marginLeft: "45px", }}>
                                <tr>
                                     <th>{res.brand}</th>
                                </tr>
                                
                                    <tr>
                                        <td>For {res.category}</td> 
                                    </tr> 
            
                                <tr>
                                    
                                    <th style={{color:"red", textDecoration: "line-through"}}>₹{res.MRP}</th>
                                     <th style={{color:"grey"}}>({res.discount} % Off)</th> 
                                     
                                </tr>
                                <th>₹{res.price}</th>
                            </table>

                            <button className="addcartbutton mb-3" onClick={()=>{
                                dispatch(AddtoCart({
                                                    image:res.imgURIs[1],
                                                    brand:res.brand,
                                                    id:res.id,
                                                    price:res.price,
                                                    category:res.category,
                                                    rating:res.rating
                                                })) , 
                                                
                                                setDisabled(prev=>({...prev,[index]:true}))

                            }} disabled={disabled[index]} >  {disabled ? "Add to cart" : "Added" }  </button>
                            


                            {/*wishlist button*/}
                            <button onClick={()=>{
                                changewishlistcolor(index),
                                dispatch(AddtoWishlist({

                                    image:res.imgURIs[1],
                                    brand:res.brand,
                                    price:res.price,
                                    category:res.category,
                                    id:res.id,
                                    rating:res.rating,
                            
                                })),
                                setWishlistadd((prev)=>({...prev,[index]:true}))

                            }} className="addwishlistbutton"  disabled={wishlistadd[index]}> 

                              <div >
                                
                            <p className="rating">{res.rating}<FaStarHalfAlt style={{color:"yellow"}}/> </p></div>
                              <h5> {wishlistadd[index] ? (<FaHeart style={{color:"red"}}/>) :(<FaRegHeart />) } </h5>
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