import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("Error:", );
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <b>{user.name}</b> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
