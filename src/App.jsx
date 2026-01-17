import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Body from './Body'
import Service from './Service'
import About from './About'
import Education from './Education'
import { useEffect } from 'react'
import Projects from './Projects'
import { Route, Routes, useLocation } from 'react-router-dom'
import Contact from './Contact'
import "aos/dist/aos.css"
import AOS from 'aos'



function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 450,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })

  return (
    <>
    <div className="body">
      <div className="bodyN">
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/education' element={<Education />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      </div>
</div>
     


    </>
  )
}

export default App
