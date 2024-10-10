import { InfoRow } from "./Fotografo";
import Slider from "react-slick";

import ubicacion from "../../assets/ubicacion.png";
import eyes from "../../assets/iconEyes.png";
import iconStar from "../../assets/iconStar.png";

import estrella from "../../assets/stars.png";
import { DataFotografos } from "../../data/MOCK_DATA";

import React, { useEffect, useState } from "react";
export const CardFotografo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil o tablet
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1400); // 1024px es el límite de tabletas
    };

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Verificar el tamaño al cargar la página
    handleResize();

    // Limpiar el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false, // Muestra los puntos de navegación
    infinite: false, // El carrusel se repite al llegar al final
    speed: 500, // Velocidad de la animación
    slidesToShow: 1.7, // Muestra 3 elementos a la vez en pantallas grandes
    slidesToScroll: 1, // Se desplaza de un slide a la vez
  };
  return (
    <section className="container">
      <h3 className="my-5">Fotógrafos destacados</h3>

      {/* Mostrar carrusel solo en móvil/tablet */}
      {isMobile ? (
        <Slider {...settings}>
          {DataFotografos.map((data, index) => (
            <div className="wrapper shadow" key={index}>
              <div className="profile   ">
                <div className="thumbnail rounded-circle border border-5 overflow-hidden border-light">
                  <img
                    src={data.img}
                    className="w-100 h-100 object-fit-cover"
                    alt="Foto de perfil"
                  />
                </div>
                <h3 className="name">{data.nombre}</h3>
                <InfoRow
                  icon={ubicacion}
                  text={data.localidad}
                  customClass="d-flex align-items-center justify-content-center "
                />
                <InfoRow
                  icon={iconStar}
                  text={data.datoExtra}
                  customClass="d-flex align-items-center justify-content-center "
                />
                <div className="d-flex justify-content-center">
                  <img src={estrella} className="mx-4 my-2" alt="estrella" />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center justify-content-center "
                >
                  <img src={eyes} className="me-2" alt="ojos" />
                  Contactar
                </button>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="d-flex ">
          {DataFotografos.map((data, index) => (
            <div className="wrapper shadow me-4" key={index}>
              <div className="profile">
                <div className="thumbnail rounded-circle border border-5 overflow-hidden border-light">
                  <img
                    src={data.img}
                    className="w-100 h-100 object-fit-cover"
                    alt="Foto de perfil"
                  />
                </div>
                <h3 className="name">{data.nombre}</h3>
                <InfoRow
                  icon={ubicacion}
                  text={data.localidad}
                  customClass=""
                />
                <InfoRow icon={iconStar} text={data.datoExtra} customClass="" />
                <img src={estrella} className="mx-4 my-2" alt="estrella" />
                <button type="button" className="btn btn-outline-secondary">
                  <img src={eyes} className="me-2" alt="ojos" />
                  Contactar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
