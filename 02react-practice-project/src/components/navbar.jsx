export  default function Navbar(){
    return(
        <nav style={{display:"flex", justifyContent:"space-around"}}>
            <div style={{display:"flex",columnGap:"10px"}}>
            <p>home</p>
            <p>about us</p>
            <p>Cart Orders</p>
            </div>
            <div style={{display:"flex",columnGap:"10px"}}>
            <p>login/SignUp</p>
            <p>contact us</p>
            </div>
        </nav>
    )
}