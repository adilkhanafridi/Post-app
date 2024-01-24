import React from 'react'
import { Link } from 'react-router-dom';
import { datalist } from './NewData';
const About = () => {
    return (
    <div>
      {datalist.map((data)=>{
        return(
<div className='container'>
    <div className='card mt-4' style={{padding:"20px"}}>
    <h1>{data.userId}</h1>
    <h2>{data.id}</h2>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
       <Link to={`PostDeataile/${data.id}`}><button>read more</button></Link> 
      
    </div>
</div>
        );
      })}
    </div>
  )
}

export default About

