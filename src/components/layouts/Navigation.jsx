import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="grid grid-cols-2 m-10">
            <Link to="/" className="text-4xl text-green-400">Itinerary Tracker</Link>
            <div className = "text-center grid grid-cols-5 text-gray-400 font-black text-base">
                <Link to="/" >Home</Link>
                <Link to="/add" >Add Itinerary</Link>
                <Link to="/itineraries" >All Itinerary</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact Us</Link>
            </div>
        </div>
    )
}

export default Navigation
