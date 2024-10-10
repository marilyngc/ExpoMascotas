import { InfoRow } from "./Fotografo";

import Image from 'react-bootstrap/Image';
import portada from "../../assets/conejoPortada.jpg";
import perfil from "../../assets/perfil.jpg";
import camara from "../../assets/camara.png";
import copy from "../../assets/copyIcon.png";
import ubicacion from "../../assets/ubicacion.png";

import { DataFotografos } from "../../data/MOCK_DATA";
export const CardFotografo = () => {
    return(
      
  <section className="container">
    {DataFotografos.map((index,data) => (
         <div className="wrapper" key={index}>
	
         <div className="profile">
             
             <img src={data.img} class="thumbnail"/>
             {/* <div class="check"><i class="fas fa-check"></i></div> */}
             <h3 className="name">Beverly Little</h3>
             <InfoRow icon={ubicacion} text="hola" customClass="hola"/>
             <InfoRow icon={ubicacion} text="hola" customClass="hola" />
             <p className="title">Javascript Developer</p>
             <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
             <button type="button" className="btn">Hire Me</button>
         </div>
         
     
     </div>
    ))}
 
  </section>




      

    )
}