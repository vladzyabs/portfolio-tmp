import React from 'react'
import styles from './Works.module.scss'
import {Work} from './Work';

type WorksPropsType = {}

export function Works(props: WorksPropsType) {
   return (
      <section className={styles.works}>
         <h2>My works</h2>
         <div className={styles.container}>
            <Work title={'Social network'} img={''} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
            <Work title={'Todolists'} img={''} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
         </div>
      </section>
   )
}
