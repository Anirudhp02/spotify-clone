import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'
import { songsData } from '../assets/assets'
import SongItem from './Songitem'

const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Chart</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
        
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item,index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
        
      </div>
    </div>
  )
}

export default DisplayHome