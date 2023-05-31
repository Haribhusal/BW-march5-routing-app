import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Car from "../components/Car";

const HomePage = () => {
  // React arrow function component
  const [users, setUsers] = useState([]);
  // here, users and setUsers with big bracket, is a state varible that holds variable and a updater function to update the value of that variable.

  useEffect(() => {
    // Here, useEffect is a hook
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setUsers(res.data);
      });
    // here axios is a package that help us to work with HTTP operations.
    // Get data from server,
    // Send data to server
    // Update something on server
    // Delete the record or data
  }, []);

  console.log(users);
  return (
    <div className="textGreen">
      <div className="userslist">
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <div className="py-3">
              {user.name} ****** {user.email}{" "}
            </div>
          </Link>
        ))}
      </div>
      <hr />
      <Car />
    </div>
  );
};

export default HomePage;
