import './highlights.css'
// import me from './images/me.jpg'
import msme from './images/msme.jpg'
import g20 from './images/g20.jpg'
import vit from './images/vit.jpg'
import myvideo from './videos/myvideo.mp4'; 
import { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Highlights = () => {
  const [isPlaying, setIsPlaying] = useState(false); 
  const [isMuted, setIsMuted] = useState(true); 
  const [videoProgress, setVideoProgress] = useState(0); 


  useEffect(() => {
    let elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }, []);

  useEffect(() => {
    const videoElement = document.querySelector('.carousel-item video');
    videoElement.addEventListener('timeupdate', () => {
      setVideoProgress(videoElement.currentTime);
    });
  }, []);


  const togglePlayPause = () => {
    const videoElement = document.querySelector('.carousel-item video');
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };
  const toggleMuteUnmute = () => {
    const videoElement = document.querySelector('.carousel-item video');
    videoElement.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const replayVideo = () => {
    const videoElement = document.querySelector('.carousel-item video');
    videoElement.currentTime = 0;
    videoElement.play();
    setIsPlaying(true);
  };


  return (
    <div className="carousel">
      <a className="carousel-item" style={{width:'350px', height:'350px'}} href="#one!">
        <img src={msme} alt='Img 1' />
        <div className='cap'>MSME Innovative Scheme approved 13.9 lakhs INR for our project’s development and implementation.</div>
      </a>
      <a className="carousel-item" href="#two!" style={{width:'350px', height:'350px'}}>
        <img src={g20} alt="Img 2" />
        <div className='cap'>Attended G20 Summit in Vizag.</div>
      </a>
      <a className="carousel-item" style={{width:'350px', height:'350px'}} href="#three!">
        <video 
          src={myvideo} 
          alt='Video 1' 
          autoPlay={isPlaying} 
          loop 
          muted={isMuted}
          style={{width:'100%', height:'100%'}}
        ></video>
        <div className='cap'>Achievements of 2023</div>
        <button onClick={togglePlayPause}>
          {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </button>
        <button onClick={toggleMuteUnmute}>
          {isMuted ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeMute} />}
        </button>
        {/* <button onClick={replayVideo}> */}
          {/* <FontAwesomeIcon icon={faRedoAlt} /> */}
        {/* </button> */}

      </a>
      <a className="carousel-item" href="#four!" style={{width:'350px', height:'350px'}}>
        <img src={vit} alt="Img 4" />
        <div className='cap'>Award & Reward from VIT R&D Dept.,</div>
      </a>
      {/* <a className="carousel-item" href="#five!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Img 5" />
        <div className='cap'>Image 5</div>
      </a> */}
    </div>
  );
}
export default Highlights;