import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import cart from "../../assets/wrapper.png";
import { DataMenu } from '../../data/MOCK_DATA';

export const NavBar = ()=>  {
  return (
    <Navbar collapseOnSelect expand="lg" className=" bg-white">
      <Container>
      {DataMenu.map((item, index) => (
        <React.Fragment key={index}>
          <Navbar.Brand href="#home"><div className="square fw-semibold">
  {item.logo}
</div>
</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
             
            </Nav>
            <Nav className=''>
            {item.texto.map((text, idx) => {
                // Verificamos si el elemento es un string o un objeto
                if (typeof text === 'string') {
                  return <Nav.Link key={idx} href={`#${text.toLowerCase()}`} className="me-4 color_texto">{text}</Nav.Link>;
                } else if (typeof text === 'object') {
                  return (
                    <> <div class="circle mt-2 fw-semibold">
                    DS
                  </div>
                  <NavDropdown key={idx} title="Delfina"  id="collapsible-nav-dropdown">
                      {text.Delfina.map((subItem, subIdx) => (
                        <NavDropdown.Item key={subIdx} href={`#${subItem.toLowerCase()}`}>
                          {subItem}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  </>
                 
                  );
                }
                return null; // En caso de que no sea un string ni un objeto
              })}
             
            </Nav>
          </Navbar.Collapse>
        </React.Fragment>
      ))}
     
      
     <button className=' ms-3 pe-5 btn p-0 border-0 bg-transparent'>
        <img src={cart} alt="cart"/> 
        </button>
      </Container>

    </Navbar>
  );
}

