import { useState } from "react";
import "./App.css";

const employees = [
  {
    id: 1,
    name: "James King",
    title: "President and CEO",
    office: "781-000-0002",
    mobile: "617-000-0002",
    email: "jking@fakeemail.com",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Julie Taylor",
    title: "VP of Marketing",
    office: "781-000-0002",
    mobile: "617-000-0002",
    email: "jtaylor@fakeemail.com",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Eugene Lee",
    title: "CFO",
    office: "781-000-0002",
    mobile: "617-000-0002",
    email: "elee@fakeemail.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "John Williams",
    title: "VP Engineering",
    office: "781-000-0002",
    mobile: "617-000-0002",
    email: "jwilliams@fakeemail.com",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Ray Moore",
    title: "VP of Sales",
    office: "781-000-0002",
    mobile: "617-000-0002",
    email: "rmoore@fakeemail.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Paul Jones",
    title: "QA Manager",
    office: "781-000-0002",
    mobile: "617-000-0002",
    email: "pjones@fakeemail.com",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="app-container">
      {/* Home Page */}
      <div className="home-page">
        <header className="header">Employee Directory</header>

        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
        />

        <div className="employee-list">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="employee-item"
              onClick={() => setSelectedEmployee(emp)}
            >
              <img src={emp.avatar} alt={emp.name} />
              <div>
                <h4>{emp.name}</h4>
                <p>{emp.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Employee Page */}
      <div className="employee-page">
        <header className="header">
          {selectedEmployee && (
            <button
              className="back-btn"
              onClick={() => setSelectedEmployee(null)}
            >
              ←
            </button>
          )}
          Employee
        </header>

        {selectedEmployee && (
          <div className="employee-details">
            <img
              src={selectedEmployee.avatar}
              alt={selectedEmployee.name}
              className="detail-avatar"
            />
            <h3>{selectedEmployee.name}</h3>
            <p className="title">{selectedEmployee.title}</p>

            <div className="contact-card">
              <div>Call Office: {selectedEmployee.office}</div>
              <div>Call Mobile: {selectedEmployee.mobile}</div>
              <div>SMS: {selectedEmployee.mobile}</div>
              <div>Email: {selectedEmployee.email}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
