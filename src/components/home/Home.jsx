import React, { useEffect, useState } from 'react'
import './home.css'
import IMG1 from '../../assets/img-1.png'
import IMG2 from '../../assets/img-2.png'
import IMG3 from '../../assets/img-3.png'
import IMG4 from '../../assets/img-4.png'
import AVATAR1 from '../../assets/avatar-1.png'
import AVATAR2 from '../../assets/avatar-2.png'
import Logo from '../../assets/logo.png'
import axios from 'axios';

const Home = () => {

  const baseurl = "https://72fc7xa4pk.execute-api.us-east-2.amazonaws.com/prueba/api/v2/portal/dev-test";

  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [userInsert, setUserInsert] = useState({
    id: '',
    name: '',
    email: '',
    cellphone: '',
    acceptsPolitics: '',
    interestedInInvesting: '',
    interestedInBorrowing: '',
  })

  const handleChange = e => {
    const {name, value} = e.target;
    setUserInsert((prevSate) => ({
        ...prevSate,
        [name]: value
    }))
    console.log(userInsert)
  }

  const abrirCerarModalInsertar = () => {
    setModalInsertar(!modalInsertar);

  }

  const peticionGet = async() => {
    await axios.get(baseurl)
    .then(response => {
        setData(response.data);
    }).catch(error => {
        console.log(error);
    })
  }

  const peticionPost = async() => {
    let f = new FormData();
    f.append("name", userInsert.nombre);
    f.append("email", userInsert.referencia);
    f.append("cellphone", userInsert.precio);
    f.append("info", userInsert.peso);
    f.append("terminos", userInsert.categoria);

    await axios.post(baseurl, f)
    .then(response => {
        setData(data.concat(response.data));
        abrirCerarModalInsertar();
    }).catch(error => {
        console.log(error);
    })
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <section>
      <div className='container home__container'>
        <div className='p-garantia'>
          <img src={IMG1} alt="Proyecto Garantía" />
          <h3>Proyectos Con Garantía</h3>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi unde fugit natus illo nam rerum corporis at dicta accusamus.</p>
        </div>

        <div className='conocenos'>
          <h1>Este es el primer espacio donde todos</h1>
          <h3>Avanzamos juntos</h3>

          <p>
            Somos el primer Crowdfundig de Financiación en Perú, donde empresas y emprendedores podrán solicitar recursos para un proyecto y todos podemos invertir recibiendo una ganancia por nuestros recursos.
          </p>

          <a href="#">Conocenos más</a>

        </div>
      </div>

      <div className='home__content'>
        <div className='home__cards'>
          <div className='home__card'> 
            <img src={IMG2} alt="img-2" />
            <small>
              Crea una Campaña de Financiación
            </small>
          </div>

          <div className='home__card'> 
            <img src={IMG3} alt="img-3" />
            <small>
              Invierte en el proyecto que quieras
            </small>
          </div>

          <div className='home__card'> 
            <img src={IMG4} alt="img-4" />
            <small>
              Recibe una ganancia por tu inversión
            </small>
          </div>

          <div className='home__card-avatar'> 
            <img src={AVATAR1} alt="AVATAR 1" />
            <div className='card-logo'>
              <small>Vigilados por:</small>
              <img src={Logo} alt="Logo" />
            </div>
          </div>

          <div className='content-info'>
            <div className='content-img'>
              <img src={AVATAR2} alt="avatar2" />
            </div>

            <div className='card-info'>
              <h2>¿Esto es legal en perú?</h2>
              <p>
                Somos una Sociedad Administradora de Plataformas de Financiamiento Participativo Financiero, estas son vigiladas por la SMV (Superintendencia del Mercado de Valores), actualmente nos encontramos en proceso de Solicitud de Permiso de Funcionamiento ante el regulador.
              </p>
            </div>

            <div className='card-info'>
              <h2>¿Cuando pedo invertir?</h2>
              <p>
                Por el momento no estamos en funcionamiento, esperamos poder hacer un lanzamiento cuando la SMV nos autorice.
                <br />
                <br /> 
                Estaremos actualizando a todos sobre las fechas de lanzamiento, puedes estar atento a nuestras redes o inscribirte a nuestros boletines.
              </p>
            </div>
          </div>

          <div className='conocenos-boton'>
            <a href="#">Conocenos más</a>
          </div>

        </div>
      </div>

      
    </section>
  )
}

export default Home