import { useState } from "react";
import Header from "./components/Header";
import Itineraries from "./components/Itineraries";

function App() {
  const [itineraries, setItineraries] = useState([
    {
        id: 1,
        text: "Read React documentation",
        time: "Sun at 10AM",
        reminder: true,
    },
    {
        id: 2,
        text: "Do laundry",
        time: "Sun at 8AM",
        reminder: true,
    },
    {
        id: 3,
        text: "Go to the gym",
        time: "Fri at 6PM",
        reminder: false,
    },
    {
      id: 4,
      text: "Do Zatec assignment",
      time: "Sat 9AM",
      reminder: false,
  },
  ]);

  const deleteItinerary = (id) => {
    setItineraries(itineraries.filter((itinerary) => itinerary.id !== id))
  }

  return (
    <div className="text-xl m-6 border border-blue-400 md:w-94">
      <Header />
      {itineraries.length > 0 ? <Itineraries itineraries={itineraries} onDelete={deleteItinerary} /> : 'Nothing on the itinerary'}
    </div>
  );
}

export default App;
