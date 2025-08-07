import { useState } from 'react'
import Header from './Components/Header/header'
import Alert from './Components/Alert/alert'
import  Ipadpro from './Components/IPadPro/ipadpro'
import Macbookpro from './Components/MacBookAir/macbookair'
import Iphone11Pro from './Components/IPhone11Pro/iphone11pro'
import ForthBothSections from './Components/ForthbothSection/ForthbothSection'
import FifthBothSections from './Components/Fifthbothsection/fifthbothsection'
import SixthBothSections  from './Components/SixthBothSection/SixthBothSection'
import Footer from './Components/Footer/footer'








import './App.css'
import './Components/Header/header.css'
import './Components/Alert/alert.css'
import './Components/IPadPro/ipadpro.css'
import './Components/MacBookAir/macbookair.css'
import './Components/IPhone11Pro/iphone11pro.css'
import './Components/ForthbothSection/ForthbothSection.css'
import './Components/Fifthbothsection/fifthbothsection.css'
import './Components/SixthBothSection/SixthBothSection.css'
import './Components/Footer/footer.css'




function App() {
 

  return (
    <>

     <Header />
     <Alert />
     <Ipadpro />
     <Macbookpro />
     <Iphone11Pro />
     <ForthBothSections />
     <FifthBothSections />
     <SixthBothSections />
     <Footer />

     
    
    </>
  )
}

export default App
