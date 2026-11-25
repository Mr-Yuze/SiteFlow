import { useState } from "react";
import "./Login.css";

function Login() {
  const [mail, setmail] = useState("")
  const [Pass, setPass] = useState("")

  const pred =(e)=>{
    e.preventDefault();
  }

  return (
    <div className="login-container" id="logindiv">
        <center><h1>SITEFLOW</h1></center>
        <center><h7>Construction Site Management</h7></center>
        <br></br>

        <form onSubmit={pred}>
            <label>Name:</label>
            <input type="text" placeholder="Enter the Name:"/>
            <label>Email:</label>
            <input type="email" placeholder="Enter the Email:" required value={mail} onChange={(e)=>setmail(e.target.value)} /> <br></br>
            <label>Password:</label>
            <input type="password" placeholder="Enter the Password" required value={Pass} onChange={(e)=>setPass(e.target.value)} /> <br></br>
            <br></br>
            <center><button id="sub" type="submit">SUBMIT</button></center>
        </form>

    </div>
  );
}

export default Login;
