import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    {/* Hook: sirve para mantener el estado */}
    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {
       // setCategories([categories.concat('Valorant')])
       //setCategories(cat => [...cat, 'valorant'])
        if(categories.includes(newCategory)) return;

       setCategories([newCategory, ...categories])
    }

  return (
    <>
        {/* titulo */}
        <h1>GifEpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={ onAddCategory }/>

        {/* Listado de Gif */}

        { 
            categories.map( category => ( 
                <GifGrid 
                    key={ category } 
                    category={ category }/> )) 
        }
    </>
  )
}
