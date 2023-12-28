import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await  getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    {/* El useEffect es un hook que te permite realizar efectos secundarios en componentes funcionales Ej: llamadas a la API*/}
    useEffect(() => {
        getImages();
    }, [ ])

    return{
        images,
        isLoading
    }
}
