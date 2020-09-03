import React from 'react'
import styles from './Сontacts.module.scss'

type ContactsPropsType = {}

export function Contacts(props: ContactsPropsType) {
   return (
      <section className={styles.contacts}>
         <h2>Contacts</h2>
         <div className={styles.container}>
            <form className={styles.contactsForm}>

               <label htmlFor="contacts-name">Name:</label>
               <input type="text" id="contacts-name"/>

               <label htmlFor="contacts-phone">Phone:</label>
               <input type="text" id="contacts-phone"/>

               <label htmlFor="contacts-addit">Additional Information:</label>
               <textarea id="contacts-addit"/>

               <button>Send</button>

            </form>
         </div>
      </section>
   )
}
