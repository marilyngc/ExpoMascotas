import Image from "react-bootstrap/esm/Image";
import estrella from "../../assets/estrella.png";
import carro from "../../assets/carroBlanco.png";
export const Calificacion = () => {
    return(
        <section className="container">
        <div className="row  justify-content-center">
          <div className="col-6 d-flex justify-content-end">
          <button type="button" class="btn btn-light d-flex align-items-center">
            <Image className="me-2" src={estrella}/>
            Calificar</button>
          </div>
          <div className="col-6">
            <button type="button" className="btn text-light d-flex align-items-center" style={{backgroundColor:"#D63415"}}>
            <Image className="me-2" style={{color:"white"}} src={carro}/>
                Agregar todo</button>
          </div>
        </div>
      </section>
      
    )
}