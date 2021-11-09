import Itinerary from "./Itinerary";

const Itineraries = ({ itineraries, onDelete, onToggle }) => {

    return (
        <div>
            {itineraries.map((itinerary) => (
                <Itinerary key={itinerary.id} itinerary={itinerary} 
                onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Itineraries
