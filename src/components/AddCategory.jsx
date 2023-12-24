import React, {useState} from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        {/*Sirve para no recargar el navegador*/}
        event.preventDefault();

        {/*Rompe la función en cadso de que no se ingrese más de un caracter.... la funcion trim() = elimina los espacios adelante y atrás*/}
        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [ ...categories, inputValue ])
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
                type="text" 
                placeholder='Buscar gifs' 
                value={ inputValue } 
                onChange={ onInputChange } />
    </form>
  )
}
