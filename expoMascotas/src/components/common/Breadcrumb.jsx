import React from "react";
import icono from "../../assets/copy.png";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export const Breadcrumb = () => {

  
  
  return (
    <> 
     <Navbar    style={{
        "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
      }}
      aria-label="breadcrumb" className="bg-body-tertiary">
    <Container>
      <ol className="breadcrumb m-0"> {/* m-0 elimina el margen por defecto */}
        <li className="breadcrumb-item">
          <a
            className="icon-link icon-link-hover"
            style={{ 
              '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)',
              color: '#D63415',
              textDecorationColor: '#D63415',
              textDecoration: 'underline' 
            }}
            href="#"
          >
            <img src={icono} alt="icono" className="bi " /> 
            Álbunes
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          15/06/2024
        </li>
      </ol>
    </Container>
  </Navbar>

    </>
   
  );
};
