import Head from 'next/head'
import Image from 'next/image'
import LeftSideBar from '../components/leftSideBar'
import RightSidebar from '../components/rightSidebar'
/*import styles from '../styles/Home.module.css'*/
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
    categori:['comedia', 'sport' , 'accion', 'scifi']
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]
export default function Home({game}) {
  return (<div className='flex'>
    <div className='bg-gray-900 w-20 flex-none flex flex-col min-h-screen h-screen px-2 py-2 '>
      <div className='overflow-y-auto'>
      <ul className='text-center '>
        <li>
          <a href='#'>
            <Image src={'/discord-icon.svg'} width={40} height={40}  alt='discord' className='rounded-full mx-auto'/>
          </a>
          <a href='#'>
            <Image src={'/pokemon.jpg'} width={400} height={400}  alt='discord' className='rounded-full mx-auto ' objectFit='cover'/>
          </a>
        </li>
        <li className='border-b border-gray-700 mx-4 mt-3'></li>
      </ul>
</div>
</div>
<div className='flex flex-col min-h-screen h-screen'>
      <div className='bg-red-500 flex'>
      <div className='bg-red-300 w-56 flex-none'>top left</div>
      <div>top right</div>
      </div>

      <div className='flex-1 bg-blue-500 flex overflow-y-hidden'>
        <div className='bg-violet-500 w-56 flex-none flex flex-col justify-between text-center'>
          <div className='overflow-y-auto'>
            <div>
              left sidebar
              <LeftSideBar notas={notes}/>

            </div>
            
            </div>
            <div className='bg-gray-500'>bottom</div>
        </div>

        <div className='bg-yellow-500 flex-1 flex justify-between'>
          <div className='bg-indigo-300 flex-1 flex-col justify-bettwen flex '>
            <div className='overflow-y-auto'>
              <div>
                {
                  game.map(gam=>(
                    <div key={gam.id} className="text-center px-60 ">
                      <h4 className='font-bold'>{gam.title}</h4>
                      <img src={gam.thumbnail} alt="" className=''></img>
                    </div>
                  ))
                }
              </div>
              center Tailwind CSS is fying your CSS with a tool like cssnano,and compressing your CSS with Brotli.CSS with a tool like cssnano
</div>
<div className='bg-gray-700'>chat input</div>
</div>
          <div className='bg-indigo-700 w-56 flex-none overflow-y-auto'>
            <div>
              right sidebar
            < RightSidebar />
            </div>

</div>
        </div>
      </div>
</div>
</div>   
)}
export const getServerSideProps = async(context)=>{
const res = await fetch("https://www.freetogame.com/api/games")
const games = await res.json()

return{
  props:{
game: games
  }
}
}