import { images } from "../../data/MOCK_DATA"
import { Breadcrumb } from "../common/Breadcrumb"
import { Calificacion } from "../common/Calificacion"
import { Fotografo } from "../common/Fotografo"
import { Gallery } from "../common/Gallery"
import { NavBar } from "../common/Navbar"
import { Seleccionar } from "../common/Seleccionar"

export const Home  = () => {

    return(
        <>
       
            <NavBar/>
            <Breadcrumb/>
            <Fotografo/>
            <Calificacion/>
            <Gallery imagenes={images}/>
            <Seleccionar/>
        
            
        </>
    )

}