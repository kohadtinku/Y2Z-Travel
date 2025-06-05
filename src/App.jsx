import { useState } from "react";
import Header from "./components/Header";
import ItineraryCard from "./components/ItineraryCard";
import img from "./assets/redfort.jpg";
import img1 from "./assets/humanyun.jpg";
import img2 from "./assets/india gate.jpg";
import img3 from "./assets/opera.jpg";
import img4 from "./assets/qutub.jpg";
import map from "./assets/image.png";

const initialPlaces = [
  {
    title: "India Gate",
    rating: "4.6 (281,124)",
    description: "India Gate is a war memorial located in New Delhi...",
    image: img2,
  },
  {
    title: "Red Fort",
    rating: "4.5 (168,729)",
    description: "The Red Fort is a historical fort in the old Delhi...",
    image: img,
  },
  {
    title: "Qutub Minar",
    rating: "4.5 (151,556)",
    description:
      "Qutub Minar is a minaret or a victory tower located in Delhi...",
    image: img4,
  },
  {
    title: "Lotus Temple",
    rating: "4.5 (87,772)",
    description: "Located in New Delhi, the Lotus Temple is a Bahá'í House...",
    image: img3,
  },
];

function App() {
  const [places, setPlaces] = useState(initialPlaces);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(places[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const handleDragOver = (index) => {
    const draggedOverItem = places[index];

    if (draggedItem === draggedOverItem) {
      return;
    }

    let items = places.filter((item) => item !== draggedItem);

    items.splice(index, 0, draggedItem);

    setPlaces(items);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className="min-h-screen bg-gray-100 p-4 w-full md:w-[45%]">
        <Header />
        <h2 className="text-xl font-bold mt-4 mb-2">Itinerary</h2>
        <p className="text-sm  mt-4 mb-2">Day</p>
        <div className="space-y-4">
          {places.map((place, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragOver={() => handleDragOver(idx)}
              onDragEnd={handleDragEnd}
              className="draggable-item"
            >
              <ItineraryCard place={place} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-full md:w-[55%]">
        <img
          src={map}
          alt="map"
          className="w-full h-screen object-cover rounded-l-3xl"
        />
      </div>
    </div>
  );
}

export default App;