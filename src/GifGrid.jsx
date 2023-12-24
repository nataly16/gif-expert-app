import React, { useEffect, useState } from 'react'
import { getGifs } from './helpers/getGifs'

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
        <ol>
          {images.map(({id, title}) =>(
            <li key={id}>{title}</li>
          ))}
        </ol>
    </>
  )
}
