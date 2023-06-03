
import Registro from '../components/Registro';
const Contacto = () => {  
    const BackgroundImage = "img/pateleria.jpg";  
    return (
        <div className="container-fluid" style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", height: "100vh" }}>
            <div className="container mt-5" >
            <h1 className='text-center'> Cuentanos ¿Como te podemos ayudar?</h1>
            <Registro />
            </div>
        </div>
    );
}
export default Contacto;