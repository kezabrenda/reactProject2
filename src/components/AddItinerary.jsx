import { useState } from "react";

const AddItinerary = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [time, setTime] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add an itinerary');
            return;
        }
      
          onAdd({ text, time, reminder });
      
          setText('');
          setTime('');
          setReminder(false);
    }

    return (
        <form className="border border-blue-600 m-4 p-4" onSubmit={onSubmit}>
            <div>
                <label className = "font-black mb-2">Itinerary</label>
                <input className = "border border-black text-base w-full" type="text"placeholder="Add to itinerary"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <label className="font-black mb-2">Day & Time</label>
                <input className = "border border-black text-base w-full" type="text" placeholder="Add day & time"
                value={time}
                onChange={(e) => setTime(e.target.value)} />
            </div>
            <div>
                <label className="font-black text-sm mb-2 mr-12">Set Reminder</label>
                <input type="checkbox" value={reminder} 
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} 
                />
            </div>
            <input className = "bg-green-300 text-base p-2 w-full" type="submit" value = "Save to itinerary" />
        </form>
    )
}

export default AddItinerary
