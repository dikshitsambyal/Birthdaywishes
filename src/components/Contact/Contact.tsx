import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import ScrollAnimation from "react-animate-on-scroll";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>The WishBoard</h2>  
        <br /><br />    
      
      <p>
  <strong>Dear Sister,</strong>
</p>

<ScrollAnimation animateIn="fadeInUp" delay={0.05 * 1000}>
<p>
  On your special day, I just want to tell you how much you mean to me. You’ve always been my biggest inspiration, my loudest cheerleader, and the person who makes even the ordinary moments unforgettable. Watching you grow into the amazing person you are today has been one of the greatest blessings of my life.
</p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
<p>
  As you step into this new year, I’m so excited to see all the dreams you'll chase, the adventures you'll live, and the happiness you'll create. I’ll always be right here — cheering you on, laughing with you, and celebrating every beautiful moment that comes your way.
</p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
<p>
  <strong>Happy Birthday, Sister!</strong> The best is yet to come. 🎉💖
</p>
</ScrollAnimation>

</header>
     
    </Container>
  )
}