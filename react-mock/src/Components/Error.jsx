import { Link } from "react-router-dom"

function Errorpage (){

    return(
        <div className="errordiv">
            <h1>404</h1>
            <h3>Page not Found</h3>
            <Link to={"/"}><h5>Click to Home</h5></Link>
        </div>
    )
}

export default Errorpage