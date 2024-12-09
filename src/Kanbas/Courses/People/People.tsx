import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PeopleTable from "./Table";

const People: React.FC = () => {
  const { cid } = useParams<{ cid: string }>();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`/api/courses/${cid}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users for course:", error);
      }
    };

    if (cid) fetchUsers();
  }, [cid]);

  return (
    <div>
      <h2>Enrolled Users</h2>
      <PeopleTable users={users} />
    </div>
  );
};

export default People;
