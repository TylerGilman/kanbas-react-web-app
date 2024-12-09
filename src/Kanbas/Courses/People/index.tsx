import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const People = () => {
    const { cid } = useParams();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsersForCourse = async () => {
            try {
                const response = await axiosWithCredentials.get(`/api/courses/${cid}/users/`);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users for course:", error);
            }
        };

        if (cid) {
            fetchUsersForCourse();
        }
    }, [cid]);

    return (
        <div>
            <h2>People in Course</h2>
            <PeopleTable users={users} />
        </div>
    );
};

export default People;
