
export default function Formulario  ({content,date,categori=[]})  {
    console.log(content)
    return (
    <li>
    <p>{content}
    <small>
        <time>{date}</time>
    </small>
    {categori.map((categoris)=><small key={categoris}>{categoris}</small>)}
    </p>
    </li>)
}