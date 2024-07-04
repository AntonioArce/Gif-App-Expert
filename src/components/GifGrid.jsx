import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>CARGANDO.....</h2>)
            }
            <h3></h3>
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem  
                            key={ image.id } 
                            title={ image.title } 
                            url={ image.url }
                        />
                    ))
                }
            </div>
        </>
    )
}