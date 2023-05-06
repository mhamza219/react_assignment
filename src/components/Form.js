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