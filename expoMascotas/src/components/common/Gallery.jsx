import React, { useState } from 'react';
import { Seleccionar } from './Seleccionar';
import carro from "../../assets/carroBlanco.png";
export const Gallery = ({ imagenes }) => {
  const [columns, setColumns] = useState(4);

  const handleColumnsChange = (value) => {
    setColumns(value); // Actualiza el estado de columnas
  };

  

  return (
    <div className="container">
     




<div className="mb-3">
  <Seleccionar grid={columns} handleColumnsChange={handleColumnsChange} />
     
      </div>

   

      <div className="row">
        {imagenes.map((image, index) => (
          <div key={index} className={`col-${12 / columns} mb-4 bg- position-relative `} style={{height: columns < 3 ? "400px" : "270px"}}>
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
