import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className = "text-center flex justify-evenly justify-items-start text-gray-400 font-black text-2xl m-4">
            <Link to="/" >Home Page</Link>
            <Link to="/itineraries" >Track your Itinerary</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Contact Us</Link>
            <Link to="/add" >Add to Itinerary</Link>
        </div>
    )
}

export default Navigation
