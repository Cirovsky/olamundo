import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <nav className='header__navigation'>
                <ul>
                    <li><Link to='/' 
                        className={`${location.pathname == '/'? 'linkEmphasis': '' }`}>Início</Link></li>
                    <li><Link to='/sobremim' 
                        className={`${location.pathname == '/sobremim'? 'linkEmphasis': '' }`} >Sobre mim</Link></li>
                </ul>
            </nav>
        </header>
    )
}
