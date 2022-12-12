import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/perfil.jpeg'
export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                César Souza
            </h1>  
            <p className={styles.paragrafo}>
                Bem-vindo ao meu portifólio! Eu sou César Daniel, Desenvolvedor de Software. Aqui eu compartilho os principais
                projetos criados durante minha trajetoria como Desenvolvedor das tecnologias que mais utilizo, como: Nodejs, ReactJs e liguagens como
                Html, css e Javascript.
            </p>     
         </div>
         <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} />
            <img  className={styles.minhaFoto} src={minhaFoto} alt="foto César Souza"/>
         </div>
    </div>
  )
}
