/*
import React, {useEffect} from 'react'
import axios from 'axios'


function FetchData() {
	useEffect(()=>{
		axios.get(https://jsonplaceholder.typicode.com/users)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	},[])

	return (
		<div>FetchData</div>
	)

}

*/


/*
import axios from "axios";
import React from "react";

//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "https://jsonplaceholder.typicode.com/users/1";

export default function ApiData() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
