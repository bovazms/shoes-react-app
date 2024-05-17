import React, { useContext, useState } from 'react';
import './Adminusers.css'; 
import Sidebar from './Sidebar';
import { MyContext } from '../components/MyContext';

function Adminusers() {
  const { user, setUser,setLogin } = useContext(MyContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [bannedUsers, setBannedUsers] = useState([]);

  const userClick = (user) => {
    setSelectedUser(user);
  };

  const banUser = (selectedUser) => {
    const updatedBannedUsers = [...bannedUsers, selectedUser];
    const updatedUsers = user.filter(u => u.id !== selectedUser.id);
    
    setBannedUsers(updatedBannedUsers);
    setUser(updatedUsers);
    setLogin(false);
  };


  return (
    <div className="admin-users-container" style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Sidebar/>
      </div>
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phno</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id} className="user-row">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phno}</td>
              <td>
                <button onClick={() => userClick(user)}>View Details</button><br></br>
                <button onClick={() => banUser(user)}>Ban User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Ph no:</strong> {selectedUser.phno}</p>
        </div>
      )}

      <h1>Banned Users</h1>
      <ul>
        {bannedUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Adminusers;
