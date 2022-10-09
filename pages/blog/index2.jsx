import Link from "next/link"
import Image from "next/image"

export default function index({data}){
    return(
    <div>
 {data.map(({id, title, thumbnail})=>(
           <div key={id}>
           <h1>{id}-{title}</h1>
           <img src={thumbnail} alt="" className=''></img>
           
</div>))}
    </div>)
}
export async function getStaticProps (){
    try{
        const res = await fetch('https://www.freetogame.com/api/games')
        const data = await res.json()
return{
    props:{data}
}
    }catch (error){console.log(error)}
}
/*export const getServerSideProps = async(context)=>{
    const res = await fetch("https://www.freetogame.com/api/games")
    const games = await res.json()
    
    return{
         <Image src={thumbnail} 
           width={40} height={40}
           alt="ajaja"></Image>
      props:{
    game: games
      }
    }
    }*/