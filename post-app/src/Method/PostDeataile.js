import React from 'react'
import { useParams } from 'react-router-dom'
import { datalist } from './NewData';
const PostDeataile = () => {
const {post} = useParams();
   
     let detalsdata=datalist.find((elm)=>{
       return(elm.id==post)
     })
  return (
    <div>
      
      <h1>{detalsdata.id}</h1>
      <h1>{detalsdata.body}</h1>
    </div>
  )
}

export default PostDeataile
