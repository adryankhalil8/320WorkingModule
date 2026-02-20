export default function StarshipCard({
  starship,
  onSelect,
  isSelected,
  details,
}) {
  return (
    <div className="card" onClick={() => onSelect(starship)}>
      <h2>{starship.name}</h2>

      {isSelected && details && (
        <div className="details">
          <p>Model: {details.model}</p>
          <p>Manufacturer: {details.manufacturer}</p>
          <p>Crew: {details.crew}</p>
          <p>Passengers: {details.passengers}</p>
        </div>
      )}
    </div>
  );
}