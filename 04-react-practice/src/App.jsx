import { useState } from "react"
import UserDetails from "../components/UserDetails"

function App() {
  const [users,setUsers] = useState([]) 
  
  return (
    <>
    {(users.length>0)?users.map((user)=>{
       return <UserDetails key={user.id}  user={user} setUsers={setUsers}/>
    }): <div>Hello World Please Enter User Data in User Array</div>}
    </>
  )
}

export default App
