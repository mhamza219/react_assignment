import React from 'react'
import '../css/Gallery.css';

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
							<img src={item.imgSrc} style={{width: '20%'}}/>

						</div>
					)
				})}
			</div>
		</>
		
	)
}

export default Gallery;





/*

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Form from './Form'

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

*/
