import React, { useState } from 'react';
import {FaTruckMoving } from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsCart3} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import {FiLogIn} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';
import {Link} from 'react-router-dom'; 
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
const Nav = ({searchbtn}) =>{
  const [search, setSearch] = useState()
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return(
    <>
    <div className = 'livre'>
      <div  className='icone'>
      <FaTruckMoving/>
      </div>
      <p>Entregas grátis para compras acima de 100.000kz</p>
  </div>
  <div className='main_header'>
    <div className='container'>
      <div className='logo'>
        <img src='.\img\logo2.jpg' alt='logo'></img>
      </div>
        <div className='caixa_pesquisa'>
          <input type='text' value={search} placeholder='Pesquise o seu produto' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
          <button onClick={() => searchbtn(search)}>Pesquisar</button>
        </div>
        <div className='icone'>
          {
            isAuthenticated &&
            (
              <div className='conta'>
              <div className='icone_usuario'>
                <FaUserCircle/>
              </div>
              <p>Olá, {user.name}</p>
            </div>
            )
          }
      <div className='icone1'>
      <Link to="/favoritos" className='link'><AiOutlineHeart /></Link>
      <Link to="/carrinho" className='link'><BsCart3 /></Link>
      </div>
      </div>
    </div>
  </div>
  <div className='header'>
    <div className='container'>
      <div className='nav'>
      <ul>
        <li>
          <Link to='/' className='link'>Inicio</Link>
        </li>
        <li>
          <Link to='/produto' className='link'>Produto</Link>
        </li>
        <li>
          <Link to='/sobre' className='link'>Sobre</Link>
        </li>
        <li>
          <Link to='/contato' className='link'>Contacto</Link>
        </li>
        <li>
          <Link to ='/login' className='link'>Login</Link>
        </li>
      </ul>
      </div>
      <div className='loginout'>
        {
          isAuthenticated ?
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><FiLogOut/></button>
          :
          <button onClick={() => loginWithRedirect()}><FiLogIn/></button>
        }
        </div>
    </div>
  </div>
    </>
  )
}
 export default Nav
