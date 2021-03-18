import React,{useContext} from 'react'
import {UserContext} from './context/UserContext'
function User() {
    const userContext = useContext(UserContext)
    const user = userContext[0]
    console.log(userContext)

    return (
        <div>
            {
            user.map((item,index) => {
                return <li key={index}>{`${item.FirstName} ${item.LastName} ${item.Email}`}</li>
            })
            }
        </div>
    )
}

export default User
