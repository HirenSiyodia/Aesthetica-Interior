import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Studio from './components/Studio'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Studio/>
      <Blog/>
      <Contact/>
    </>
  )
}

export default App