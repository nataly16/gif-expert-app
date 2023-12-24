import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    {/* Hook: sirve para mantener el estado */}
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ])

    const onAddCategory = (newCategory) => {
       // setCategories([categories.concat('Valorant')])
       //setCategories(cat => [...cat, 'valorant'])
        if(categories.includes(newCategory)) return;

       setCategories([...categories, newCategory])
    }

  return (
    <>
        {/* titulo */}
        <h1>GifEpertApp</h1>

        {/* Input */}
        <AddCategory 
            //setCategories = { setCategories }
            onNewCategory={ onAddCategory }
        />

        {/* Listado de Gif */}
        <ol>
            { categories.map( category => 
                (
                    <div key={ category }>
                        <h3>{category}</h3>
                        <li>{ category }</li>
                    </div>)
                ) 
            }
        </ol>
            {/* Git Item */}
    </>
  )
}
