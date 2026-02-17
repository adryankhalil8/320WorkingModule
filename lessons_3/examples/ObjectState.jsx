// ObjectState.jsx - Managing object state with spread operator
import React, { useState } from "react";

function ProfileEditor() {
  const [profile, setProfile] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    bio: "React developer",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Profile Editor</h1>
      <div style={{ marginBottom: "0.5rem" }}>
        <label>First Name: </label>
        <input name="firstName" value={profile.firstName} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label>Last Name: </label>
        <input name="lastName" value={profile.lastName} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label>Email: </label>
        <input name="email" value={profile.email} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label>Bio: </label>
        <input name="bio" value={profile.bio} onChange={handleChange} />
      </div>
      <h3>Preview:</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
        {JSON.stringify(profile, null, 2)}
      </pre>
    </div>
  );
}

export default ProfileEditor;
