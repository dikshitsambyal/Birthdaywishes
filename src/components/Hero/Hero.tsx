import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import birthdaySong from '../../assets/happy-birthday-220024.mp3'
import { useState, useRef } from 'react';


 
export function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle play/pause
  const playSong = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // Pause the song if it's playing
        audioRef.current.pause();
      } else {
        // Play the song if it's paused
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle play state
    }
  };
  
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <h5>Here's to You, My Sister – My Forever Friend 💫</h5><br/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h3>🎉 Happy Birthday, Sister! 🎉</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h4>Just for You, My Favorite Person in the World 💕</h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">"To the one who lights up my world with her smile – today is all about you. May your day be as beautiful and amazing as your soul."</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
          <div>
      {/* Button to trigger play/pause */}
      <NavHashLink smooth to="#home" className="button" onClick={playSong}>
        Wishes
      </NavHashLink>

      {/* Audio element */}
      <audio ref={audioRef} src={birthdaySong} />
    </div>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}