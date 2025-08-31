import './highlights.css'
// import me from './images/me.jpg'
import msme from './images/msme.jpg'
import g20 from './images/g20.jpg'
import vit from './images/vit.jpg'
import port from './images/port.jpg'
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

const Highlights = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }, []);

  return (
    <div className="carousel">
      <a className="carousel-item" style={{width:'350px', height:'350px'}} href="#one!">
        <img src={msme} alt='Img 1' />
      </a>
      <a className="carousel-item" href="#two!" style={{width:'350px', height:'350px'}}>
        <img src={g20} alt="Img 2" />
        <div className='cap'>Attended G20 Summit in Hyderabad.</div>
      </a>
      <a className="carousel-item" href="#three!" style={{width:'350px', height:'350px'}}>
        <img src={vit} alt="Img 3" />
        <div className='cap'>Award from GRIET R&D Dept.,</div>
      </a>
      <a className="carousel-item" href="#four!" style={{width:'350px', height:'350px'}}>
        <img src={port} alt="Img 4" />
      </a>
      {/* <a className="carousel-item" href="#five!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Img 5" />
        <div className='cap'>Image 5</div>
      </a> */}
    </div>
  );
}
export default Highlights;