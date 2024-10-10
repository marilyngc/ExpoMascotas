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
    <section style={{ height: "58vh" }}>
    <div style={{ maxHeight: '30vh', overflow: 'hidden' }} className="rounded m-3 position-relative">
      <Image src={portada} fluid style={{ height: '100%', width: 'auto' }} />
    </div>

    <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
      <div className="profile-container mt-5 rounded-circle border border-5 overflow-hidden border-light">
        <img src={perfil} className="w-100 h-100 object-fit-cover" alt="Foto de perfil" />
      </div>

      <p className="text-center display-6 fw-bold text-secondary">Expo mascotas 2024</p>

      <div>
        <InfoRow icon={camara} text="Juan Bianchi" customClass="text-body-secondary mb-1" />
        <InfoRow icon={ubicacion} text="Centro de convenciones, Bariloche" customClass="text-body-secondary mb-1" />

        <div className="row">
          <div className="col-6">
            <InfoRow icon={copy} text="12 fotos" customClass="text-body-secondary" />
          </div>
          <div className="col-6">
            <div className="text-center" style={{ color: '#D63415' }}>Exp. 15/06/2024</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
    

  ) 
}

