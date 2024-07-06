import { useState } from "react"
import UserDetails from "../components/UserDetails"
import NewUserForm from "../components/NewUserForm"

function App() {
  const [users,setUsers] = useState([]) 
  const [newUser,setNewUser] = useState(false)
  const [counter,setCounter] = useState(1);  
  return (
    <>
    <button onClick={(e)=>{
      setNewUser((newUser)=> !newUser)
    }}>Add User</button>
    {(newUser)?<NewUserForm  setUsers={setUsers} counter={counter} setCounter={setCounter} setNewUser={setNewUser}/>
    :(users.length>0)?users.map((user)=>{
      return <UserDetails key={user.id}  user={user} setUsers={setUsers}/>
   }): <div></div>}
    </>
  )
}

export default App
