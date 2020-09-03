import React from 'react'
import styles from './Skills.module.scss'
import {Skill} from './Skill'

type SkillsPropsType = {}

export function Skills(props: SkillsPropsType) {
   return (
      <section className={styles.skills}>
         <h2>My skills</h2>
         <div className={styles.container}>
            <Skill title={'React'} img={''} description={'A JavaScript library for buildiasdfasdfasfasfasdfasdfasdf sad gasg dsfg dsfg sdg ng user interfaces'}/>
            <Skill title={'JS'} img={''} description={'A JavaScript library for building user interfaces'}/>
            <Skill title={'TS'} img={''} description={'A JavaScript library for building user interfaces'}/>
            <Skill title={'Sass'} img={''} description={'A JavaScript library for building user interfaces'}/>
            <Skill title={'Git'} img={''} description={'A JavaScript library for building user interfaces'}/>
         </div>
      </section>
   )
}
