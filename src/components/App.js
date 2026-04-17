import React, { useEffect, useState } from "react";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    const result = await fetch("https://course-api.com/react-tours-project");
    if (result.ok) {
      const data = await result.json();
      setTours(data);
    } else {
      setError("Failed to fetch tours. Please try again.");
    }
    setLoading(false);
  }

  const refreshTours = () => fetchTours();

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);



  return (
    <main id="main">
      <div className="app-container">
        <h1 className="title">Our Tours</h1>
        <div className="tours-grid">

          {loading ? (
            <div className="loading-container">
              <div className="loader">
                <div className="spinner"></div>
                <p>Loading tours...</p>
              </div>
            </div>
          ) : error ? (
            <div className="error-container">
              <h2>Error: {error}</h2>
              <button className="refresh-btn" onClick={refreshTours}>
                Try Again
              </button>
            </div>
          ) : tours.length === 0 ? (
            <div className="empty-state">
              <h2>No tours left</h2>
              <button className="refresh-btn" onClick={refreshTours}>
                Refresh Tours
              </button>
            </div>
          ) : (
            <>
              {tours.map((tour) => (
                <Tour key={tour.id} {...tour} removeTour={removeTour} />
              ))}
            </>
          )}

        </div>
      </div>
    </main>
  )
}
export default App;
