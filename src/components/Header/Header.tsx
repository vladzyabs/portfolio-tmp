import React from 'react'
import styles from './Header.module.scss'

type HeaderPropsType = {}

export function Header(props: HeaderPropsType) {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.logo}>VZ</div>
            <nav className={styles.navbar}>
               <a href="/#" className={styles.link}>link</a>
               <a href="/#" className={styles.link}>link</a>
               <a href="/#" className={styles.link}>link</a>
               <a href="/#" className={styles.link}>link</a>
               <a href="/#" className={styles.link}>link</a>
            </nav>
         </div>
      </header>
   )
}
