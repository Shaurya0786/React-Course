import { useState } from "react"


export default function UserDetails({user,setUsers}){
    
    const [isEditing,setIsEditing] = useState(false)
    const [email,setEmail] = useState(user.email);
    const [username,setUsername] = useState(user.username) 
    
    return(
        <div>
            <div>
                <p>UserID: <
                    span>{user.id}</span>
                </p>
                <p>Username: 
                {
                isEditing ? (<input type="text" value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                }}/>)
                 : 
                 (<span>{user.username}</span>) 
                 }
                 </p>
                <p>Email: 
                {
                isEditing ? (<input type="text" value={user.email}  onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>)
                 : 
                 (<span>{user.email}</span>) 
                 }
                 </p>
            </div>
            <div>
                <button onClick={()=>{setIsEditing((currentState)=> !currentState)}}>Edit</button>
                <button onClick={()=>{setUsers((currentState)=>{
                    return currentState.map((currentuser)=>{
                        if(currentuser.id===user.id) return ({...currentuser,username,email})
                        else return currentuser
                    })
                })
                setIsEditing(false)
            }}>Save</button>
                <button onClick={()=>{
                    setUsers((currentState)=>{
                        return currentState.filter((currentuser)=>{
                            if(currentuser.id!=user.id) return currentuser
                        })
                    })
                }}>Delete</button>
            </div>
        </div>
    )
}