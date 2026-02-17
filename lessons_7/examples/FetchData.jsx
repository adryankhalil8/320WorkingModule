// FetchData.jsx - Using useEffect to fetch data from an API
import React, { useState, useEffect } from "react";

function FetchData() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message);
          setLoading(false);
        }
      });

    // Cleanup: prevent setting state on unmounted component
    return () => { ignore = true; };
  }, [userId]);

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>useEffect — Fetch Data</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label>User ID: </label>
        <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {user && !loading && (
        <div style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
          <h2>{user.name}</h2>
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
          <p>🌐 {user.website}</p>
          <p>🏢 {user.company?.name}</p>
        </div>
      )}
    </div>
  );
}

export default FetchData;
