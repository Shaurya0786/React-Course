import { useState } from "react"

export default function NewUserForm({counter,setUsers,setCounter,setNewUser}){
    const [username,setUsername] = useState(" ");
    const [email,setEmail] = useState("");
    const disabled = !username || !email

    return (
        <form action="" onSubmit={(e)=>{
            e.preventDefault()
            const addedUser = {
                id:counter,
                username:username,
                email:email
            }
            setCounter((currentCount)=> currentCount+1);
            setUsers((currentState)=>[...currentState,addedUser])
            setNewUser((newUser)=> !newUser)
        }}>
            <div>
                <label htmlFor="username">UserName</label>
                <input type="text" id="username"  onChange={(e)=>{
                    setUsername(e.target.value)
                }} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
                <button disabled={disabled} type="submit" >Submit</button>
        </form>
    )
}