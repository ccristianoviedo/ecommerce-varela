import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = ({ ropa }) => {
    const { id } = useParams()

    const [talle, setTalle] = useState (0);

    // useMemo se utiliza para no volver a iterar entre las ropas
    const ropaElegida = useMemo (() => {        
        return ropa.find((item) => {
            console.log(item);
            return item.id == id;
        })
    },[id]) 

    return (
         // cambiar por item detail
        <div>       
            <ItemDetail item={ropaElegida} />
            {talle}
            <button onClick={()=> setTalle(1)}>M</button>
            <Link to={`/item/${Number(id)+1}`}>Siguiente</Link>
        </div>
    )
}

export default ItemDetailContainer