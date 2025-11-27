import { useState } from "react";

export default function SearchMovers({ onSearch }) {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [moveType, setMoveType] = useState("");
  const [services, setServices] = useState([]);

  const cityOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
  ];

  const toggleService = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleSubmit = () => {
    onSearch({
      fromCity,
     
      moveType,
      services,
    });
    if (!fromCity.trim()) {
  alert("Please select a city before comparing movers");
  return;
}
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 shadow-xl rounded-2xl p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Compare &amp; Book Verified Packers and Movers
        </h2>

        {/* FROM / TO with city suggestions */}
        <div className="grid mb-6">
          <div>
            <input
              type="text"
              list="city-list"
              placeholder="Select City"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="p-4 border rounded-lg w-full"
            />
          </div>

          {/* <div>
            <input
              type="text"
              list="city-list"
              placeholder="To City"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="p-4 border rounded-lg w-full"
            />
          </div> */}

          {/* Reusable datalist for both inputs */}
          <datalist id="city-list">
            {cityOptions.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </datalist>
        </div>

        {/* Move Type */}
        <div className="mb-6">
          <label className="font-semibold">Move Type</label>
          <select
            className="w-full p-4 mt-2 border rounded-lg"
            value={moveType}
            onChange={(e) => setMoveType(e.target.value)}
          >
            <option value="">Select Move Type</option>
            <option>Home Shifting</option>
            <option>Office Shifting</option>
            <option>Vehicle Transport</option>
            <option>Storage &amp; Warehouse</option>
          </select>
        </div>

        {/* Additional Services */}
        <div>
          <label className="font-semibold">Additional Services</label>
          <div className="flex gap-6 mt-2 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={services.includes("Packing")}
                onChange={() => toggleService("Packing")}
              />
              Packing
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={services.includes("Storage")}
                onChange={() => toggleService("Storage")}
              />
              Storage
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={services.includes("Insurance")}
                onChange={() => toggleService("Insurance")}
              />
              Insurance
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold text-lg"
          >
            Compare Movers
          </button>
        </div>
      </div>
    </section>
  );
}
