import { useState, useEffect } from "react";
import { getAllStarships, getStarshipByDetails } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";

export default function App() {
  const [starships, setStarships] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [shipDetails, setShipDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const ships = await getAllStarships();
      setStarships(ships);
    }

    fetchData();
  }, []);

  const handleSelect = async (ship) => {
    // Toggle off if clicking same ship
    if (selectedShip?.url === ship.url) {
      setSelectedShip(null);
      setShipDetails(null);
      return;
    }

    const details = await getStarshipByDetails(ship.url);
    setSelectedShip(ship);
    setShipDetails(details);
  };

  return (
    <div>
      <h1>STAR WARS STARSHIPS</h1>

      <div className="card-container">
        {starships.map((ship) => (
          <StarshipCard
            key={ship.url}
            starship={ship}
            onSelect={handleSelect}
            isSelected={selectedShip?.url === ship.url}
            details={shipDetails}
          />
        ))}
      </div>
    </div>
  );
}