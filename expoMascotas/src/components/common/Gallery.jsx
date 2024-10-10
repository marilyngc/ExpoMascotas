import React, { useState } from 'react';
import { Seleccionar } from './Seleccionar';
import carro from "../../assets/carroBlanco.png";
export const Gallery = ({ imagenes }) => {
  const [columns, setColumns] = useState(4);

  const handleColumnsChange = (value) => {
    setColumns(value); 
  };

  
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState(0);
  const [seleccionadas, setSeleccionadas] = useState([]);

  const seleccionarImg = (index) => {
    // Verifica si la imagen ya está seleccionada
    if (seleccionadas.includes(index)) {
      // Si está seleccionada, quita del array y resta 1
      setSeleccionadas(seleccionadas.filter(i => i !== index));
      setImagenesSeleccionadas(imagenesSeleccionadas - 1);
    } else {
      // Si no está seleccionada, agrega y suma 1
      setSeleccionadas([...seleccionadas, index]);
      setImagenesSeleccionadas(imagenesSeleccionadas + 1);
    }
  };

  return (
    <div className="container">
     
    



<div className="mb-3">
  <Seleccionar seleccionadas={imagenesSeleccionadas} grid={columns} handleColumnsChange={handleColumnsChange} />
     
      </div>

   

      <div className="row">
        {imagenes.map((image, index) => (
          <div key={index} className={`col-${12 / columns} mb-4 bg- position-relative galeria-img ${seleccionadas.includes(index) ? 'seleccionada' : ''} `}
           style={{height: columns < 3 ? "400px" : "270px", cursor:"pointer"}}
           onClick={() => seleccionarImg(index)}
           >
            <img src={image} alt={`Gallery ${index}`} className="img-fluid h-100 w-100 object-fit-cover " />
            <button className='position-absolute top-0 end-0 p-2 mt-3 me-4 border d-flex btn b '>
              <img src={carro}alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
