import React, {useState} from 'react';

const Count = () => {
	const [num, setNum] = useState(0);


	// increment
	const incNum = () => {
		setNum(num+1);
	}

	// Decrement
	const decNum = () => {
		setNum(num-1);
	}
	return(
		<>
			<div className="main_div">
				<div className="centre_div">
					<h1> {num} </h1>
					<div className="btn_div">
						<button onClick={incNum}> Increment </button>
						<button onClick={decNum}> Decrement </button>
					</div>
				</div>
			</div>
		</>

		)
}

export default Count;