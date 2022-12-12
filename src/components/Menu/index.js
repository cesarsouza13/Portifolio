
import {Link, useLocation} from 'react-router-dom'
import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink'


//links servem para criar um SPA, uma pagina singular sem precisa de atualizar para navegar entre rotas
export default function Menu() {

   
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/">Inicio</MenuLink>
            <MenuLink to="/sobremim">SobreMim</MenuLink>
            
        </nav>
    </header>
  )
}
