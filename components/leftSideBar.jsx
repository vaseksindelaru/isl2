import Formulario from "../modulos/formulario"
import { useState } from "react"



export default function LeftSideBar  (props) {
  const [notes,setNotes] = useState(props.notas)
 const [newNote,setNewNote] = useState('')
 
 const handleChange = (evento) => {
 setNewNote(evento.target.value)
 
 }
 const handleClick = () => {
  console.log(newNote)
 

 const noteToAdd = {
  id: notes.length + 1,
  content: newNote,
  date: new Date().toISOString(),
  important : Math.random() < 0.5
 }
 console.log (noteToAdd);
 setNotes(notes.concat(noteToAdd))
 }

    /*if(typeof notes === "undefined" || notes.length === 0){
        return "OJO ,no tenemos notas en el formulario"}*/
return ( 
  <div>
<h1>FORMULARIO</h1>
{notes.map(note => <Formulario key ={note.id}{...note}/>)}
<div>
  <input type='text' onChange={handleChange} value={newNote}/>
  <button onClick={handleClick}>Crear notas</button>
</div>
</div>)}
 
 