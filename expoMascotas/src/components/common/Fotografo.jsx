import Image from 'react-bootstrap/Image';
import portada from "../../assets/conejoPortada.jpg";
import perfil from "../../assets/perfil.jpg";
import camara from "../../assets/camara.png";
import copy from "../../assets/copyIcon.png";
import ubicacion from "../../assets/ubicacion.png";

export const InfoRow = ({ icon, text, customClass = "" }) => (
  <div className={`text-center ${customClass}`}>
    <Image src={icon} className="me-2" alt={text} />
    {text}
  </div>
);
export const Fotografo =   ()=>  {

  return(
    <section style={{ height: "57vh" }} className='container-view position-relative'>
    <div
  style={{ maxHeight: '30vh', overflow: 'hidden' }}
  className="rounded m-3  d-flex justify-content-center align-items-center"
>
  <Image src={portada} fluid style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
</div>
    

    <div className="position-absolute top-90 start-50 mt-3 w-100 translate-middle d-flex flex-column align-items-center">
      <div className="profile-container mt-5 rounded-circle border border-5 overflow-hidden border-light">
        <img src={perfil} className="w-100 h-100 object-fit-cover" alt="Foto de perfil" />
      </div>
      <h3 className="name text-secondary my-4 fw-bold">Expo mascotas 2024</h3>

      <div className='w-100'>
        <InfoRow icon={camara} text="Juan Bianchi" customClass="text-body-secondary mb-1" />
        <InfoRow icon={ubicacion} text="Centro de convenciones, Bariloche" customClass="text-body-secondary mb-1" />

        <div className="row mx-0">
          <div className="col-6 d-flex justify-content-end">
            <InfoRow icon={copy} text="12 fotos" customClass="text-body-secondary" />
          </div>
          <div className="col-6 d-flex  justify-content-start">
            <div className="text-center" style={{ color: '#D63415' }}>Exp. 15/06/2024</div>
          </div>
        </div>
      </div>
    </div>

  </section>
  
  
    

  ) 
}

