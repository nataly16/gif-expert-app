import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([])

  const getImages = async() => {
    const newImages = await  getGifs(category);
    setImages(newImages);
  }

  {/* El useEffect es un hook que te permite realizar efectos secundarios en componentes funcionales Ej: llamadas a la API*/}
  useEffect(() => {
    getImages();
  }, [ ])
  
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {images.map((image) =>(
            <GifItem key={image.id} {...image}/>
          ))}
        </div>
    </>
  )
}
