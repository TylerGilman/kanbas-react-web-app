import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import * as client from "../client";

const People = () => {
    const { cid } = useParams<{ cid: string }>();
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                if (cid) {
                    const fetchedUsers = await client.findUsersForCourse(cid);
                    setUsers(fetchedUsers);
                }
            } catch (error) {
                console.error("Error fetching users for course:", error);
            }
        };
        fetchUsers();
    }, [cid]);

    return (
        <div>
            <h2>People in Course</h2>
            <PeopleTable users={users} />
        </div>
    );
};

export default People;
