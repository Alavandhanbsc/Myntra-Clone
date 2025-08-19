import axios from "axios"
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"

const prevsymbol = "<<<"
const nextsymbol = ">>>"



const sliderurl = "http://localhost:3001/Slider"

function Slider() {
  const [sliderdata, setSliderdata] = useState([])


  useEffect(() => {

    const fetchdata = async () => {
      const finaldata = await axios.get(sliderurl)
      setSliderdata(finaldata.data)
    }
    fetchdata()
  }, [])

  console.log(sliderdata)

  return (
    <>

    <Carousel className="mt-4" interval={2000}  prevIcon={<h3 style={{color:"grey"}}>{prevsymbol}</h3>}  nextIcon={<h3 style={{color:"black"}}>{nextsymbol}</h3>}>  

      {sliderdata.map((res, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={res.uri} alt={`Slide ${index + 1}`}/>
        </Carousel.Item>
      ))}

    </Carousel>




    </>
  )
}

export default Slider