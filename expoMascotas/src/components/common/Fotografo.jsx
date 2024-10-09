import Image from 'react-bootstrap/Image';
import portada from "../../assets/conejoPortada.jpg";
import perfil from "../../assets/perfil.jpg";
import camara from "../../assets/camara.png";
import copy from "../../assets/copyIcon.png";
import ubicacion from "../../assets/ubicacion.png";


export const Fotografo =   ()=>  {
    
  return(
    <section className=' ' style={{height:"58vh"}}> 
    <div
      style={{ maxHeight: '30vh', overflow: 'hidden' }} 
      className="rounded m-3 position-relative"
    >
      <Image src={portada} fluid style={{ height: '100%', width: 'auto' }} />
    </div>
  
    <div className="position-absolute  top-50 start-50 translate-middle d-flex flex-column align-items-center "> 
      <div
        className={" profile-container  mt-5  rounded-circle border border-5  overflow-hidden  border-light"}
       
      >
        <img
          src={perfil}
          className="w-100 h-100 object-fit-cover "
          alt="Foto de perfil"
        />
      </div>
      <p className="text-center  display-6 fw-bold text-secondary">
   Expo mascotas 2024
  </p>

  <div className="">
  {/* Fila 1 */}
  <div className="row mb-1">
    <div className="col-12">
      <div className="text-center">
        <Image src={camara} className="me-2" alt="Cámara" />
        Juan Bianchi
      </div>
    </div>
  </div>

  {/* Fila 2 */}
  <div className="row mb-1">
    <div className="col-12">
      <div className="text-center text-body-secondary">
        <Image src={ubicacion} className="me-2" alt="Ubicación" />
        Centro de convenciones, Bariloche
      </div>
    </div>
  </div>

  {/* Fila 3 */}
  <div className="row">
    <div className="col-6">
      <div className="text-center text-body-secondary">
        <Image src={copy} className="me-2" alt="12 fotos" />
        12 fotos
      </div>
    </div>
    <div className="col-6">
      <div className="text-center" style={{ color: '#D63415' }}>
        Exp. 15/06/2024
      </div>
    </div>
  </div>
</div>








      {/* <div className="d-flex flex-column align-items-center align-items-sm-start gap-2">

   
  </div> */}

    </div>



  </section>
  
  
    

  ) 
}

