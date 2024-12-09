// src/Kanbas/Courses/People/Table.tsx
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
                    <th>Role</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>{user.role}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PeopleTable;
