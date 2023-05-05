import React from 'react'

function Form() {
	return (
		<form className = 'container'>
			<div className = 'header'>
				<h1> Registration Form</h1>
			</div>

			<div>
				<label for = "name"> Name </label>
				<input type = 'text' placeholder = "Enter name" name = "name" id = "name"></input>
			</div>

			<div>
				<label for = "email"> Email </label>
				<input type = 'email' placeholder = "Enter email" name = "email" id = "email"></input>
			</div>

			<div>
				<label for = "password"> Password </label>
				<input type='password' placeholder="Enter password" name="password" id="password"></input>
			</div>

			
		</form>

		)
}

export default Form