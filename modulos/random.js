
import { useState } from "react";
const randomList = [
    {id:1,
    name:'hola',
    description:'blalalaa',
    avatar:'a',
    time:'a'},
    
    {id:2,
    name:'hello',
    description:'blalalab',
    avatar:'b',
    time:'b'},
    
    {id:3,
    name:'ahoj',
    description:'blalalac',
    avatar:'c',
    time:'c'}
    ]  
export default function Random () {
    const randomList2 = [
        {id:1,
        name:'hola',
        description:'blalalaa',
        avatar:'a',
        time:'a'},
        
        {id:2,
        name:'hello',
        description:'blalalab',
        avatar:'b',
        time:'b'},
        
        {id:3,
        name:'ahoj',
        description:'blalalac',
        avatar:'c',
        time:'c'}
        ] 
    const[state,newState] = useState(randomList)

 let aleatorio = Math.floor(Math.random() * state.length)
console.log()
console.log(aleatorio)

return(
   <div>
    <button onClick={()=>{newState(randomList2)}}>boton</button>
    {state[aleatorio].name}
    <p>llegando Random</p>
    {state.map((dates)=>{
        return <p key={dates.id}>{dates.name}</p>
    })}
   </div>)

}

 //{date.map((alea)=><small key={alea}>{alea}</small>)}
