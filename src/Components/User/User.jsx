import React from 'react'
import "./User.css"
import UserData from "../UserForm/UserData"
const User = () => {
  return (
    <div className='user_wrapper'>
        <div className="user_container">
            <UserData/>
        </div>
    </div>
  )
}

export default User