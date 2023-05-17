import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Projects from './components/projects/Projects'


const App = () => (
  
  <BrowserRouter>

      <Routes>
      <Route path='/projects' element={<Projects/>} />
      <Route path='/*' element={
        <React.Fragment>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </React.Fragment>
      } />
      </Routes>
      
  </BrowserRouter>
  );

export default App