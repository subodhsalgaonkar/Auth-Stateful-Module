import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        alert("Signup successful");
        navigate("/login");
      } else if (response.status === 400) {
        alert("signup unsuccessful server error");
      } else {
        alert("Enter valid details");
      }
    } catch (e) {
      console.log("An error occurred", e);
      alert("please try later");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>
          <h1>Signup</h1>
        </span>
        <br />
        <span>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </span>
        <br />
        <span>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </span>
        <br />
        <span>
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </span>
        <button type="submit">Signin</button>
      </form>
      <span>
        <p>
          Already have an account?{" "}
          <a onClick={() => navigate("/login")}>Login</a>
        </p>
      </span>
    </div>
  );
};

export default login;
