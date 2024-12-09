// src/Kanbas/Courses/People/index.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import * as client from "../client";

const People = () => {
    const { cid } = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);
                if (cid) {
                    const fetchedUsers = await client.findUsersForCourse(cid);
                    setUsers(fetchedUsers);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Failed to load users");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [cid]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div>
            <h2>People in Course</h2>
            <PeopleTable users={users} />
        </div>
    );
};

export default People;
