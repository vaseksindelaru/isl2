import Link from "next/link"
import Image from "next/image"
import Layount from "../components/Layount"

 export default function about(){
    return(<div>
    <Layount title='About'
    description='description About'>
        <Image src="/pokemon.jpg" width={300} height={200}></Image>
        <Link href="/">
        <a>volver al index</a>
        </Link>
        <h1>desde About</h1>
    </Layount>
    
        </div>  
    )
}