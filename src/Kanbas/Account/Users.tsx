import React, { useEffect, useState } from "react";
import axios from "axios";
import PeopleTable from "../Courses/People/Table";

const axiosWithCredentials = axios.create({ withCredentials: true });

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosWithCredentials.get("api/users/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching all users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <PeopleTable users={users} />
    </div>
  );
};

export default Users;
