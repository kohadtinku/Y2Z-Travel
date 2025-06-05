import { FaMapMarkerAlt, FaEdit, FaTrashAlt } from "react-icons/fa";

export default function ItineraryCard({ place }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <img
        src={place.image}
        alt={place.title}
        className="w-20 h-20 rounded-lg object-cover shadow-sm"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{place.title}</h3>
          <div className="flex gap-2 text-gray-600">
            <button title="Location" className="hover:text-blue-600">
              <FaMapMarkerAlt />
            </button>
            <button title="Edit" className="hover:text-yellow-500">
              <FaEdit />
            </button>
            <button title="Delete" className="hover:text-red-500">
              <FaTrashAlt />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{place.description}</p>
        <div className="text-sm mt-2 text-yellow-600 font-semibold">
          ⭐ {place.rating}
        </div>
      </div>
    </div>
  );
}
