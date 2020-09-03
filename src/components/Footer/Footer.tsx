import React from 'react'
import styles from './Footer.module.scss'

type FooterPropsType = {}

export function Footer(props: FooterPropsType) {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <div>Zyabskiy Vladislav Ivanovich</div>
            <div>&copy; 2020, all rights reserved.</div>
         </div>
      </footer>
   )
}
