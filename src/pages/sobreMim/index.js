
import React from 'react'
import PostModelo from '../../components/PostModelo'
import fotoCapa from "../../assets/sobre_mim_capa.png"
import styles from  "./SobreMim.module.css"
import fotoSobreMim from "../../assets/sobremim.jpeg"


export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>
        Olá, eu sou o César
      </h3>
      <img src={fotoSobreMim} alt="foto sobre mim" className={styles.fotoSobreMim}/>
    </PostModelo>
  )
}
