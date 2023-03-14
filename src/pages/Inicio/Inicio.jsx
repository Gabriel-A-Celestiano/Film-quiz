import './Inicio.css'
import { Link } from 'react-router-dom'


const Inicio = () => {
    return(
        <>
          <h1>Vamos começar?</h1>
          <Link className="link" to="/quiz">Iniciar</Link>
        </>
    )
}

export default Inicio 