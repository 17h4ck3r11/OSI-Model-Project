import './App.css';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import AnimatedComponent from './Components/AnimatedComponent';
import { useRef } from 'react';

function App() {
  const curRef = useRef(null)

  useEffect(() => {
    document.addEventListener("mousemove", (event)=>{
      const {clientX, clientY} = event
      const mouseX = clientX - curRef.current.clientWidth/2  ;
      const mouseY = clientY - curRef.current.clientHeight/2 ;
      curRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  const [loading, setloading] = useState(true)
  const loader = document.getElementById('preloader')

  if(loader) {
    setTimeout(() => {
      loader.style.display = 'none'
      setloading(false)
    }, 3000);
  }
  
  return (
    !loading && (
      <>
        <div
            id="cursor"
            style={{
              transition: "0.2s linear"
            }}
            ref={curRef}
          >
            <div id='animated-button' >READ MORE!</div>
          </div>
         <Router>
          <div className="app">
            <ScrollToTop/>  
            <AnimatedComponent />
            <hr style={{border:"0.5px dashed grey", marginLeft: "1%", marginRight: '1%', marginBottom:"5%", fontFamily: "'Bebas Neue', sans-serif"}}/>
          </div>
          <Footer />
        </Router>        
      </>
    )
  );
}

export default App;
