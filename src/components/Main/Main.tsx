import React from 'react'
import styles from './Main.module.scss'

type MainPropsType = {}

export function Main(props: MainPropsType) {
   return (
      <main className={styles.main}>
         <div className={styles.container}>
            <div className={styles.title}>
               <h1>Hello, my name is Vlad</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={styles.photoWrapper}>
               photo
            </div>
         </div>
      </main>
   )
}
