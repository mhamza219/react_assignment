import React from 'react'

import img1 from '../Img/img1.jpeg';
import img2 from '../Img/img2.jpeg';
import img3 from '../Img/img3.jpeg';
import img4 from '../Img/img4.jpeg';
import img5 from '../Img/img5.jpeg';
import img6 from '../Img/img6.jpeg';
import img7 from '../Img/img7.jpeg';


const  Gallery = () => {

	let data = [
			{
				id: 1,
				imgSrc: img1,
			},
			{
				id: 2,
				imgSrc: img2,
			},
			{
				id: 3,
				imgSrc: img3,
			},
			{
				id: 4,
				imgSrc: img4,
			},
			{
				id: 5,
				imgSrc: img5,
			},
			{
				id: 6,
				imgSrc: img6,
			},
			{
				id: 7,
				imgSrc: img7,
			},

		]
	return(
		<>
			<div className="gallery">
				{data.map((item, index)=>{
					return(
						<div className="pics" key={index}>
							<img src={item.imgSrc}/>

						</div>
					)
				})}
			</div>
		</>
		
	)
}

export default Gallery;