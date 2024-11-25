import { About } from '../public/components/About'
import Banner from '../public/components/Banner'
import Navbar from '../public/components/Navbar'
import Portfolio from '../public/components/Portfolio'
import Resume from '../public/components/Resume'
import Service from '../public/components/Service'
import Testimonial from '../public/components/Testimonial'
import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Resume />
      <Portfolio />
      <Testimonial />
      
    </>
  )
}

export default App
