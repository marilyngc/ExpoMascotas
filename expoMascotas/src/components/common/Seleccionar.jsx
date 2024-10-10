
import Form from 'react-bootstrap/Form';


export const Seleccionar = ({grid, handleColumnsChange}) => {
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
          return 10;
      }};

      const columnValues = [4, 3, 2, 1]; // Valores de columnas

  return (
    <section className="container  rounded bg-white d-flex justify-content-between align-items-center mt-5 mb-4 py-2 px-4">
      <div style={{ width: "100px" }}>
        Seleccionar
      </div>
      <div className="d-flex  align-items-center justify-content-end  w-50">
        <div className="me-4">
          Ver como
        </div>
        <div
          className=" position-relative  "
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <div className="progress " style={{ height: "15px"}}>
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
              style={{ left: `${10 + index * 25}%` }} 
            />
          ))}
       
       
          
          
          </div>
        </div>
      </div>
    </section>
  );
};
