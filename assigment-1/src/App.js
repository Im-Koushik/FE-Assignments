import React, { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <div className="brand">
          <img src="brand.png" alt="logo"></img>
          <span className="brand-name">Koushik</span>
        </div>
        <button className="nav-button" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      <div className="users-grid">
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default App;
