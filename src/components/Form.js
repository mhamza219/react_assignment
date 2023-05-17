/*
import React, {useState} from 'react'


function Form() {
	const data = {name:"", email:"", password:""};
	const [inputData, setInputData] = useState(data)

		function handleData(e){
			setInputData({...inputData, [e.target.name]:e.target.value})
			console.log(inputData)

		}

		function handleSubmit(e){
			e.preventDefault();
			if(!inputData.name || !inputData.email || !inputData.password){
				alert("all field mandatory")
			}
		}

	return (
		<form className = 'container' onSubmit={handleSubmit}>
			<div className = 'header'>
				<h1> Registration Form</h1>
			</div>

			<div>
				<label for = "name"> Name </label>
				<input type = 'text' placeholder = "Enter name" name = "name" id = "name" value={inputData.name} onChange={handleData}></input>
			</div>

			<div>
				<label for = "email"> Email </label>
				<input type = 'email' placeholder = "Enter email" name = "email" id = "email" value={inputData.email} onChange={handleData}></input>
			</div>

			<div>
				<label for = "password"> Password </label>
				<input type='password' placeholder="Enter password" name="password" id="password" value={inputData.password} onChange={handleData}></input>
			</div>

			<div>
				<button type='submit'>Submit</button>&nbsp;
				<button type='reset'>Reset</button>
			</div>

			
		</form>

		)
}

export default Form
*/



import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form values
    if (name === "" || email === "" || message === "") {
      console.log("Please fill in all fields.");
      return;
    }

    // Log form data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // You can perform further actions (e.g., send the data to a server) here

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
