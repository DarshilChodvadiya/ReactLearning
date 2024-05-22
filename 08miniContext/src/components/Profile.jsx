import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {

     const { user, userPassword } = useContext(UserContext);
   
  
    if (!user) return <div>Please Login</div>

    return (
      <div>
        Welcome {user.username} and your password is {userPassword.password}
      </div>
    );
}
