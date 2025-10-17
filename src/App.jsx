import {useRef} from "react";



// #181C14
// #3C3D37
// #697565
// #ECDFCC
import Navbar from "./components/Navbar"
import MiddleCompo from "./components/MiddleCompo"
import BottamSection from "./components/BottamSection"
import Projects from "./components/Projects"
import About from "./components/About"


function App() {
const bottamref=useRef(null);
const projectref=useRef(null);
const topref=useRef(null);
  return (
    <>
      <div>
        <Navbar bottamrefrence={bottamref} topref={topref} projectref={projectref}/>
        <div className="for-space-div" ref={topref} style={{height:"30px"}}></div>
        <MiddleCompo/>
        <About />
        <Projects reef={projectref}/>
        <BottamSection reef={bottamref} topref={topref}/>
      </div>
    
   
    </>
  )
}

export default App
