import React,{useState,createContext} from 'react';
export const UserContext = createContext()

function UserContextProvider(props) {
    const[user, setUser] = useState([
        {FirstName:'John', LastName:'Dane', Email:'danejohn@gmail.com'},
        {FirstName:'Amme', LastName:'Joe', Email:'ammejoe@gmail.com'},
        {FirstName:'Beren', LastName:'Philip', Email:'Bphil@gmail.com'}
    ])
    return (
        <div>
           <UserContext.Provider value={[user,setUser]}>
               {props.children}
           </UserContext.Provider>
        </div>
    )
}

export default UserContextProvider
