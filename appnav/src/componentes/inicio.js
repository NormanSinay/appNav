import '../estilos/inicio.css';
import web from '../imagen/web.jpg';

function Inicio(){
    return(
        <div className='cImg'>
            <img className='imgInicio' src={web}></img>
        </div>
    );
}

export default Inicio;