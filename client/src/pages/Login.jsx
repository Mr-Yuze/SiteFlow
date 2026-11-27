import { useState } from "react";
import "./Login.css";
import {useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [mail, setmail] = useState("")
  const [Pass, setPass] = useState("")
  const [id,setid] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  
  
  const reg=location.state
  

  const pred =(e)=>{
    e.preventDefault();
    if(reg.email===mail && reg.password===Pass && reg.id===id){
      console.log("successfull")
      if (id.startsWith("W-")) {
        navigate("/worker");
      }
      else if (id.startsWith("S-")) {
        navigate("/supervisor");
      }
      else if (id.startsWith("M-")) {
        navigate("/manager");
      }
      else if (id.startsWith("C-")) {
        navigate("/contractor");
      }
      else if (id.startsWith("A-")) {
        navigate("/admin");
      }
      else {
        console.log("Invalid ID");
        
      }
    }
  }

  return (
    <div className="login-container" id="logindiv">
        <center><h1>SITEFLOW</h1></center>
        <center><h2>Construction Site Management</h2></center>
        <br></br>

        <form onSubmit={pred}>
            <label>ID:</label>
            <input type="text" placeholder="Enter the ID:" value={id} onChange={(e)=>setid(e.target.value)}/><br></br>
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
