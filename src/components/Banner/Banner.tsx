import React from 'react'
import styles from './Banner.module.scss'

type BannerPropsType = {}

export function Banner(props: BannerPropsType) {
   return (
      <section className={styles.banner}>
         <h2>Considering remote work</h2>
         <div className={styles.container}>
            <a href="/#" className={styles.bannerLink}>hire me</a>
         </div>
      </section>
   )
}
