import { useState, useEffect, useCallback } from "react";
import TripList from "./components/TripList";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const {data: trips, isPending, error} = useFetch(url)

  if (isPending) {
    return <div><h1 className="text-5xl text-center mt-10">LOADING...</h1></div>
  }

  // if (error) {
  //   return <div><h1 className="text-5xl text-center mt-10">{error}</h1></div>
  // }

  return (
    <div className="max-w-lg mx-auto my-10">
      <h1 className="text-5xl font-bold text-center mb-7">Trips</h1>
      <TripList trips={trips} />
      <div className="mt-10 flex justify-evenly">
        <button
          onClick={() => setUrl("http://localhost:3000/trips")}
          className="bg-red-500 text-white font-medium px-3 py-2 text-2xl"
        >
          All Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=America")}
          className="bg-fuchsia-500 text-white font-medium px-3 py-2 text-2xl"
        >
          American Trips
        </button>
      </div>
    </div>
  );
}

export default App;