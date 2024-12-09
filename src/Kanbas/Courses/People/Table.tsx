import React from "react";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const PeopleTable: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
