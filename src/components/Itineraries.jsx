import Itinerary from "./Itinerary";

const Itineraries = ({ itineraries, onDelete }) => {

    return (
        <div className="ml-28">
            {itineraries.map((itinerary) => (
                <Itinerary key={itinerary.id} itinerary={itinerary} 
                onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Itineraries
