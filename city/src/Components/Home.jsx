// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import React, { useState , useEffect } from 'react';

export default function Home() {

  const [data , setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/add-city")
    .then((res) => res.json())
    .then((res) => setData(res))
  },[])


  fetch("http://localhost:8080/add-city")
.then((res) => res.json())
.then((res) => setData(res))
// .catch((err) => console.log(err))

// console.log(data)
  return (
    <div>
      <h1>HOME</h1>

      <table>
        <tr>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>


{
  data.map((e) => (
    <tr>
      {/* <td>{e.name}</td> */}
       <th>id</th>
          <td>Country</td>
          <td>City</td>
          <td>Population</td>
          <td>Edit</td>
          <td>Delete</td>
    </tr>
  ))
}
        
      </table>
    </div>
  )
}
