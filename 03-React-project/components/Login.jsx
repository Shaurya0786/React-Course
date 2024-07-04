import { useState } from "react"

function Login(){
    const [formfields,setFormFields] = useState({
        username:"",
        password:"",
        displayname:""
    })

    const isDisabled = !formfields.username || !formfields.password
    return (
        <div className="login-form">
            <form >
            <label htmlFor="">Username</label>
            <input type="text" 
            value={formfields.username}
            onChange={(e)=>{
                setFormFields((currentState)=>({...currentState,username:e.target.value}))
            }} />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" 
            id="password"
            value={formfields.password}
            onChange={(e)=>{
                setFormFields((currentState)=>({...currentState,password:e.target.value}))
            }}
            />
            <br />
            <button disabled={isDisabled}>sign in</button>
            </form>
        </div>
    )
}

export default Login