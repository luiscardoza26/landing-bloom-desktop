import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks1'>
        <li><a href="#">Quienes Somos</a></li>
        <li><a href="#">Recursos</a></li>
        <li><a href="#">Empleos</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>

      <div className='separador'></div>

      <ul className='permalinks2'>
        <li><a href="#">contactanos</a></li>
        <li><a href="#">Boletines</a></li>
      </ul>

      <div className='mini-form'>
        <form>
          <h2>¿Quieres estar Actualizado?</h2>
          <input type="email" placeholder='example@hello.com' />
          <br />
          <a href=''>Inscribete</a>
        </form>

      </div>
      
      <small className='politica'>Al hacer click en el botón “inscríbete” aceptas nuestra <a href="" className='sub-politica'>Política de tratamiento de datos</a></small>

      <small className='derechos'>&copy; 2022 Bloom Crowdfunging S.A.C, todos los derechos reservados</small>

      <div className="footer__socials">

        <h2>Siguenos en nuestras redes</h2>

        <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin className='icon' /></a>
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><FaFacebookSquare className='icon' /></a>
        <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><BsInstagram className='icon' /></a>
        <a href="https://www.youtube.com" target='_blank' rel='noreferrer'><BsYoutube className='icon' /></a>

        <h4>Vigilados por:</h4> <img src={Logo} alt="Logo" />
      </div>

    </footer>
  )
}

export default Footer