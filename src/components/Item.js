import React from 'react'


function Item() {

	const student = ['ram','rahul','gaurav','vivek'];

	return(
		<div>
		{student.map(std => <h1>I'am {std}</h1>)}
		</div>
		)
}


export default Item;