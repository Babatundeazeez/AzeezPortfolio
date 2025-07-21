import React from 'react'
import {Link} from "react-router-dom"

const NavbarSection = () => {
  return (
    
        <nav className='navbar navbar-expand-lg navbar-dark bg-success fixed-top'>
            <div className='container-fluid'>
                <Link to={'/'} className='navbar-brand'>
                <img src="/image/myLogo.png" alt="portfolioLogo" className='brandLogo' />
                </Link>
                
                <button 
                type='button'
                className='navbar-toggler' 
                data-bs-toggle ="collapse" 
                data-bs-target = "#navbarSupportedContent"
                aria-controls='#navbarSupportedContent'
                aria-expanded = "false"
                >
                <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>

                    <ul className='navbar-nav m-auto fw-bold gap-3'>
                        <li className='nav-item'>
                            <Link to={'/'} className='nav-link text-white'>Home Page</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/about'} className='nav-link text-white'>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/project'} className='nav-link text-white'>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/contact'} className='nav-link text-white'>Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/blog'} className='nav-link text-white'>Blogs</Link>
                        </li>
                        

                    </ul>

                </div>
            </div>

        </nav>

  )
}

export default NavbarSection