import React ,{useState} from 'react'
import "../../styles/login.css";
import axios from "axios";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submitHandler = async() => {
    console.log("clikced");
    const config = {headers : {"Content-Type" : "application/json"}};
    const obj = {
      email : email,
      password : password
    }

    try{
      const response = await axios.post("https://designwale-backend-api.vercel.app/api/v1/admin/login",obj,config);
      if(response){
        console.log("Submitted");
        console.log(response);
      }
    }
    catch(err){
      console.log("Error in catch block :  " ,err);
    }
  }
 

  return (
    <>
      <div className="login-main-wrapper">
        <div className="login-box">
          <div className="login-input-wrapper">
            <h2 className="login-heading">Log In</h2>
            <input type="email" name="email" id="" placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" name="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit" className='login-submit' onClick={submitHandler}>Log In</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login