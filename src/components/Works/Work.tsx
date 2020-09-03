import React from 'react'
import styles from './Works.module.scss'

type WorkPropsType = {
   title: string
   img: string
   description: string
}

export function Work(props: WorkPropsType) {
   return (
      <div className={styles.work}>
         <div className={styles.workDemo}>
            <div className={styles.workImg}>{props.img}img</div>
            <a href="/#" className={styles.workLink}>link</a>
         </div>
         <div className={styles.workText}>
            <h3 className={styles.workTitle}>{props.title}</h3>
            <p className={styles.workDesc}>{props.description}</p>
         </div>
      </div>
   )
}
