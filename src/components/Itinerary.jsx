import { FaTimes } from 'react-icons/fa'

const Itinerary = ({ itinerary, onDelete, onToggle }) => {

    return (
        <div className={`${itinerary.reminder && 'reminder'}`} 
        onClick = {() => onToggle(itinerary.id)}>
        </div>,
        <div
        className = {`text-xl bg-gray-200 p-2 m-2 ml-12 box-border md:w-72`} >
            <h3 className="font-black grid grid-cols-2">
                {itinerary.text} {' '}
                <FaTimes className="ml-24 text-red-500 cursor-pointer" 
                onClick={() => onDelete(itinerary.id)} />
            </h3>
            <p className="pt-2">{itinerary.time}</p>
        </div>
    )
}

export default Itinerary
