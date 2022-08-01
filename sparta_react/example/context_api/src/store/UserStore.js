import React, { createContext, useState } from 'react'

export const UserContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function UserStore ({children}) {
    // props로 지정하고 싶은 상태를 만들어준다.
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    return (
      //value를 통해 전달하고 싶은 값을 넣어준다.
        <UserContext.Provider value={{username,setUsername,email,setEmail}}> 
          {children}
        </UserContext.Provider>
    )
}


export default UserStore