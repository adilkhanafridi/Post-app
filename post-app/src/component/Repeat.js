import React, { useState } from 'react'
const Repeat = () => {
    const[count,setCount]=useState("ala");
    const[count2,setCount2]=useState("");
const Number=()=>{
let Find_value=("")
for (let i = 0; i < count.length-1; i++) {
    for(let j=0; j < count.length; j++){
        if(count[i]===count[j]){
        return false
        }
        else{
            alert("true")
        }
    }
    
    setCount2(Find_value)

}
}
  return (
    <div>
        <h1>{count}</h1>
        
      <button on onClick={Number} >click me</button>
      
    </div>
  )
}

export default Repeat
