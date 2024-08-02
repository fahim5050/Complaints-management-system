import React, { useEffect, useState } from 'react'
import "./UserForm.css"
import axios from 'axios'
import UserDataTable from '../User/UserDataTable'
const UserForm = () => {
    const [users,setUsers]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchComplaint = async () => {
          try {
            const response = await axios.get("http://localhost:3031/users");
            setUsers(response.data);
            setLoading(false);
          } catch (error) {
            console.log("error fetching complaint", error);
            setLoading(false);
          }
          console.log(users);
        };
        fetchComplaint();
      }, []);
      const handleView = (user) => {
        // Implement view logic here
        alert(`Viewing user: ${user.name}`);
      };
    
      const handleUpdate = (user) => {
        // Implement update logic here
        alert(`Updating user: ${user.name}`);
      };
    
      const handleDelete = (user) => {
        // Implement delete logic here
        alert(`Deleting user: ${user.name}`);
        // Optionally remove the user from the state
        setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      };
  return (
    <div className='userForm'>
<UserDataTable users={users} onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}/>

        </div>
  )
}

export default UserForm