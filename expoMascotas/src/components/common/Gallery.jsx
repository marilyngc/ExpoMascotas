import React, { useState } from 'react';

export const Gallery = ({ imagenes }) => {
  const [columns, setColumns] = useState(4);

  const handleColumnsChange = (e) => {
    setColumns(parseInt(e.target.value));
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="columns">Select Grid:</label>
        <select id="columns" value={columns} onChange={handleColumnsChange}>
          <option value="4">4 Photos per Row</option>
          <option value="3">3 Photos per Row</option>
          <option value="2">2 Photos per Row</option>
          <option value="1">1 Photo per Row</option>
        </select>
      </div>

      <div className="row">
        {imagenes.map((image, index) => (
          <div key={index} className={`col-${12 / columns} mb-4`} style={{height: columns < 3 ? "400px" : "270px"}}>
            <img src={image} alt={`Gallery ${index}`} className="img-fluid h-100 w-100 object-fit-cover " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
