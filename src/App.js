import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navcyber from './components/common/Navcyber';
import Partners from './components/common/Partners';
import Works from './components/common/Works';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoadMap from './components/RoadMap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
import Faq from './components/Faq';
import Preloader from './components/Preloader';
import Topbutton from './components/Topbutton';

function App() {

  // preloader-start
  const [loading, setLoading] =useState(true);
  // Aos-start
    useEffect (() => {
    Aos.init({once:true,});
    // Aos-end
   setTimeout(() => {
    setLoading(false);
    document.body.classList.remove("overflow-hidden")
  }, 3000)
  document.body.classList.add("overflow-hidden")
   }, [])

  //  preloader-end
  return (
    <div>
      {loading &&  <Preloader/>}
     <Navcyber/>
     <Partners/>
     <Topbutton/>
     <Works/>
     <RoadMap/>
     <Faq/>
    </div>
  );
}

export default App;
