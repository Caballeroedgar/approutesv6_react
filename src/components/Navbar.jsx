import React, { useContext } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { UserContext  } from '../context/UserProvider'


const Navbar = () => {

  const {user} = useContext( UserContext)
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <Link to="/">{user? 'juanito':'Sin conexion'}</Link>
        <NavLink to="/" className='btn btn-outline-primary'> 
        Inicio
        </NavLink>
        <NavLink to="/Blog" className='btn btn-outline-primary'>
             Blog
             </NavLink>
        <NavLink to="/Contacto" className='btn btn-outline-primary'> 
        Contacto
        </NavLink>
    </nav>
  )
}

export default Navbar