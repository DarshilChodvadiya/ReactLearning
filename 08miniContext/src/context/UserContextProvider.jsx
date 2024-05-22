import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null)
    const [userPassword, setUserPassword] = React.useState(null)

    return (
      <UserContext.Provider
        value={{ user, setUser, userPassword, setUserPassword }}
      >
        {children}
      </UserContext.Provider>
    );

}

export default UserContextProvider