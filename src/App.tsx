import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Skills} from './components/Skills/Skills'
import {Works} from './components/Works/Works'
import {Banner} from './components/Banner/Banner'
import {Contacts} from './components/Contacts/Сontacts'
import {Footer} from './components/Footer/Footer'

function App() {
   return (
      <div className="App">
         <Header/>
         <Main/>
         <Skills/>
         <Works/>
         <Banner/>
         <Contacts/>
         <Footer/>
      </div>
   )
}

export default App
