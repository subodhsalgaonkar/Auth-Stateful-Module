import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/auth/login',{email,password})

            if (response.status === 200) {
                alert("login successful");
                navigate('/dashboard')
            }else if(response.status === 400){
                alert("login unsuccessful server error");
            }
            else{
                alert("Invalid Credentials");
            }
        }catch(e){
            console.log("An error occurred", e);
            alert("please try later")
        }
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <span><h1>Login</h1></span>
      <br />
      <span>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
      </span>
      <br />      
      <span>
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Password' onChange={(event) => setPassword(event.target.value)}/>
      </span>
      <button type="submit">Login</button>     
    </form>
    <span>
        <p>New User? <a onClick={()=> navigate('/signup')}>Signup</a></p>
    </span>
    </div>
  )
}

export default login
