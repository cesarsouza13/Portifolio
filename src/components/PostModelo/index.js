import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styles from './PostModelo.module.css'


export default function PostModelo({fotoCapa,titulo, children}) {
  return (
    <article className={styles.postModeloContainer}>
        <div className={styles.fotoCapa}
            style={{backgroundImage:`url(${fotoCapa})`}}>
                

        </div>
        <h2 className={styles.titulo}>
            {titulo}
        </h2>
        <div className={styles.postConteudoContainer}>
            {children}
        </div>

    </article>
  )
}
