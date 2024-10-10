
import Form from 'react-bootstrap/Form';


export const Seleccionar = ({seleccionadas,grid, handleColumnsChange}) => {
   // Calcula el progreso basado en el número de columnas seleccionadas
    const calculateProgress = (grid) => {
      switch (grid) {
        case 1:
          return 100;
        case 2:
          return 60;
        case 3:
          return 35;
        case 4:
        default:
          return 0;
      }};

      const columnValues = [4, 3, 2, 1]; // Valores de columnas

  return (
    <section className="container  rounded bg-white d-flex justify-content-between align-items-center mt-5 mb-4 py-2 px-4">
      <div style={{ width: "100px" }}>
        Seleccionados
        
        <span className='ms-2 text-secondary fw-medium'>{seleccionadas}</span>
      </div>
      <div className="d-flex  align-items-center justify-content-end  w-50">
        <div className="me-4">
          Ver como
        </div>
        <div
          className=" position-relative  "
          style={{ width: "100%", maxWidth: "250px" }}
        >
          <div className="progress " style={{ height: "10px"}}>
            {/* Barra de progreso */}
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: `${calculateProgress(grid)}%`, backgroundColor: '#EFAEA1'  }}
              aria-valuenow={calculateProgress(grid)}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>

            {/* Círculos (Botones) */}
            {columnValues.map((value, index) => (
            <Form.Check
              key={value}
              type="radio"
              aria-label={`radio ${value}`}
              className={`custom-radio position-absolute top-50 translate-middle d-flex align-items-center justify-content-center`}
              onClick={() => handleColumnsChange(value)}
              value={value.toString()}
              checked={grid === value} 
              style={{ left: `${0 + index * 32}%` }} 
            />
          ))}
       
       
          
      
          </div>
        </div>
      
      </div>
    
    </section>
  );
};
