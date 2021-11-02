import { FaTimes } from 'react-icons/fa'

const Itinerary = ({ itinerary, onDelete }) => {
    return (
        <div className="text-xl bg-gray-200 p-4 m-4 ml-12 box-border md:w-80">
            <h3 className="font-black grid grid-cols-2">
                {itinerary.text} {' '}
                <FaTimes className=" ml-24 text-red-500 cursor-pointer" 
                onClick={() => onDelete(itinerary.id)} />
            </h3>
            <p className="pt-2">{itinerary.time}</p>
        </div>
    )
}

export default Itinerary
