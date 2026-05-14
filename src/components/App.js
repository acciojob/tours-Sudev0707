import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch("https://course-api.com/react-tours-project");
    const data = await response.json();
    console.log(data);
    setTours(data);
    setLoading(false);
  };

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Loading state
  if (loading) {
    return (
      <main id="main">
        <div className="loading">Loading...</div>
      </main>
    );
  }

  // No tours left state
  if (tours.length === 0) {
    return (
      <main id="main">
        <h1 className="title">Our Tours</h1>
        <h2>No more tours</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main id="main">
      <h1 className="title">Our Tours</h1>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </main>
  );
};

export default App;