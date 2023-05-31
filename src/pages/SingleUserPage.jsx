import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleUserPage = () => {
  const [user, setUser] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(function (res) {
        console.log(res.data);
        setUser(res.data);
        // setUsers(res.data);
      });
  }, []);

  return (
    <div>
      {user?.name} - {user?.address?.city}
      <span>{user?.email}</span>
    </div>
  );
};

export default SingleUserPage;
