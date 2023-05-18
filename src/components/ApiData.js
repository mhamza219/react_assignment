

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
  	<>
    <div>
      <h1>Data from API</h1>
    </div>
    <div>
     {data.map((item) => (
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.name[0][0]}
          </Avatar>
        }
      
        title= {item.name}
        subheader={item.email}/>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.address.street }`
          {item.address.city }
        </Typography>
      </CardContent>
      
    </Card>
        ))}
    </div>
    </>
  );
};

export default ApiData;
