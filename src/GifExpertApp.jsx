import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = ( newCategory ) => {

        if( categories.includes( newCategory ) ){
            window.alert("Este elemento ya se busco con anterioridad");
            return
        };
        setCategories([
            newCategory,
            ...categories
        ])
    }


    return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
            onNewCategory={ onAddCategory }
        />
        <ol>
            { categories.map( ( category ) => 
                (<GifGrid key={ category } category={ category } />)
            )}
        </ol>
    </>
    )
}
