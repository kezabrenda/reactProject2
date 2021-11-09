import { useState } from "react";
import Header from "./components/Header";
import Itineraries from "./components/Itineraries";
import AddItinerary from "./components/AddItinerary";
import Footer from "./components/Footer";

function App() {
  const [showAdd, setShowAdd] = useState(false);
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

  const addItinerary = (itinerary) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItinerary = {id, ...itinerary}
    setItineraries([...itineraries, newItinerary])
  }

  const deleteItinerary = (id) => {
    setItineraries(itineraries.filter((itinerary) => itinerary.id !== id))
  }

  const reminderToggle = (id) => {
    console.log(id);
    setItineraries(itineraries.map((itinerary) => itinerary.id === id ? { ...itinerary, reminder : !itinerary.reminder} : itinerary))
  }

  return (
    <div>
      <div className="text-xl m-8 border border-blue-400 md:w-96 box-border ml-96">
        <Header onAdd={() => setShowAdd(!showAdd)}
        showAdd={showAdd} />
        {showAdd && <AddItinerary onAdd={addItinerary} />}
        {itineraries.length > 0 ? <Itineraries itineraries={itineraries} 
        onDelete={deleteItinerary} 
        onToggle={reminderToggle} /> : 'Nothing on the itinerary'}
      </div>
      <Footer />
    </div>

  );
}

export default App;
