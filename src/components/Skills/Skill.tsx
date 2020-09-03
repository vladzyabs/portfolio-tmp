import React from 'react'
import styles from './Skills.module.scss'

type SkillPropsType = {
   title: string
   img: string
   description: string
}

export function Skill(props: SkillPropsType) {
   return (
      <div className={styles.skill}>
         <div className={styles.skillImg}>{props.img}</div>
         <h3 className={styles.skillTitle}>{props.title}</h3>
         <p className={styles.skillDesc}>{props.description}</p>
      </div>
   )
}
