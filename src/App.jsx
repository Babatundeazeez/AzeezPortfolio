
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarSection from './HeaderSection/NavbarSection'
import AboutMe from './pages/AboutMe'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  

  return (
    
    <div className='d-flex flex-column min-vh-100'>
      
       <BrowserRouter>
      <NavbarSection />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/project' element = {<Projects/>} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/blog' element = {<Blogs/>} />
      </Routes>
     

      </BrowserRouter>

    </div>

     
  )
}

export default App
