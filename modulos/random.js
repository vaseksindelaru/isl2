
import { useState } from "react";



function Wallet() {
  // Creamos un estado para almacenar el saldo de la cartera
  const [balance, setBalance] = useState(0);

  // Creamos una función para añadir dinero a la cartera
  const addFunds = (amount) => {
    setBalance(balance + amount);
  }

  // Creamos una función para retirar dinero de la cartera
  const withdrawFunds = (amount) => {
    if (amount > balance) {
      alert("No tienes suficiente saldo en tu cartera para realizar esta operación");
    } else {
      setBalance(balance - amount);
    }
  }

  return (
    <div>
      <h1>Tu saldo actual es: {balance}</h1>
      <button onClick={() => addFunds(10)}>Añadir 10</button>
      <button onClick={() => withdrawFunds(10)}>Retirar 10</button>
    </div>
  );
}

export default Wallet;
/*
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
    <p>ISL2</p>
    {state.map((dates)=>{
        return <li key={dates.id} >
            <p>{dates.name}</p>
            <p>{dates.description}</p>
            </li>
    })}
   </div>)

}

 //{date.map((alea)=><small key={alea}>{alea}</small>)}*/
