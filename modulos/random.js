
import { useState } from "react";
const randomList = [
    {id:1,
        name:'exp1',
        description:'redux',
        avatar:'a',
        time:'a'},
        
        {id:2,
        name:'exp2',
        description:'tailwind',
        avatar:'b',
        time:'b'},
        
        {id:3,
        name:'exp3',
        description:'token,billetera',
        avatar:'c',
        time:'c'},

        {id:4,
        name:'exp4',
        description:'formulario',
        avatar:'a',
        time:'a'},
            
        {id:5,
        name:'exp5',
        description:'graficos',
        avatar:'b',
        time:'b'},
            
        {id:6,
        name:'exp6',
        description:'appi',
        avatar:'c',
        time:'c'},

        {id:7,
        name:'exp7',
        description:'scraping',
        avatar:'a',
        time:'a'},
                
        {id:8,
        name:'exp8',
        description:'web3',
        avatar:'b',
        time:'b'},
                
        {id:9,
        name:'exp9',
        description:'ia',
        avatar:'c',
        time:'c'}
    ]  
export default function Random () {
    const randomList2 = [
        {id:1,
        name:'exp1',
        description:'redux',
        avatar:'a',
        time:'a'},
        
        {id:2,
        name:'exp2',
        description:'tailwind',
        avatar:'b',
        time:'b'},
        
        {id:3,
        name:'exp3',
        description:'token,billetera',
        avatar:'c',
        time:'c'},

        {id:4,
        name:'exp4',
        description:'formulario',
        avatar:'a',
        time:'a'},
            
        {id:5,
        name:'exp5',
        description:'graficos',
        avatar:'b',
        time:'b'},
            
        {id:6,
        name:'exp6',
        description:'appi',
        avatar:'c',
        time:'c'},

        {id:7,
        name:'exp7',
        description:'scraping',
        avatar:'a',
        time:'a'},
                
        {id:8,
        name:'exp8',
        description:'web3',
        avatar:'b',
        time:'b'},
                
        {id:9,
        name:'exp9',
        description:'ia',
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
        return <p key={dates.id}>{dates.name}{dates.description}</p>
    })}
   </div>)

}

 //{date.map((alea)=><small key={alea}>{alea}</small>)}
