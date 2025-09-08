import axios from "axios"
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const prevsymbol = "<<<"
const nextsymbol = ">>>"

const sliderurl = "http://localhost:3001/Slider"

function Slider() {
  const [sliderdata, setSliderdata] = useState([])
  const [card , setCard] = useState([])
  
  const url = "http://localhost:3001/shopCategory"
  const navigate = useNavigate()


  useEffect(() => {

    const fetchdata = async () => {
      const finaldata = await axios.get(sliderurl)
      setSliderdata(finaldata.data)
    }
    fetchdata();

    const fetchcard = async () => {
      try{
        const finalcard = await axios.get(url)
      setCard(finalcard.data)
      }catch(error){
       console.log(error)
      }
    }
    fetchcard()
  }, [])

  

  console.log("from Card :",card)

  return (
    <>

    <Carousel className="mt-4" interval={2000}  prevIcon={<h3 style={{color:"grey"}}>{prevsymbol}</h3>}  nextIcon={<h3 style={{color:"black"}}>{nextsymbol}</h3>}>  

      {sliderdata.map((res, index) => (
        <Carousel.Item key={index} style={{height:"310px"}}>
          <img className="d-block w-100" src={res.uri} alt={`Slide ${index + 1}`}/>
        </Carousel.Item>
      ))}

    </Carousel>

    <div className="homepagecategory mt-4">
        <h1>Shop Category</h1>
        {Object.keys(card).map((values, index) => (

          <div className="category-row" key={index}>

            {card[values].map((img, index) => {
              return(
              <img  key={index}   src={img}  alt=""  className="category-img" onClick={(e)=>{e.preventDefault ;navigate("/mens")}} />
              )}
            )}
            
          </div>
          
        ))}
      </div>

    </>
  )
}

export default Slider