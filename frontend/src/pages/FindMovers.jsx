import { useState } from "react";
import axios from "axios";
import SearchMovers from "../components/SearchMovers";
import MoversList from "../components/MoversList";

export default function FindMovers() {
  const [movers, setMovers] = useState([]);

  const handleSearch = async (filters) => {
    console.log("Search filters:", filters);

    if (!filters.fromCity) {
      alert("Please select a city before searching");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/api/movers", {
        params: { city: filters.fromCity }
      });

      setMovers(res.data);
      console.log("Backend movers response:", res.data);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <div className="pt-32">
      <SearchMovers onSearch={handleSearch} />

      <div className="mt-10">
        <MoversList movers={movers} />
      </div>
    </div>
  );
}
