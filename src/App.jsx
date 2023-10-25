import React, { useEffect } from 'react'; // Import useEffect from 'react'
import { useState } from 'react'; // Import useState from 'react'
import './App.css'; // Import your CSS file
import './style.css'
import CountUp from 'react-countup';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import hero from './assets/hero.png';
import DanzeLogo from './assets/DanzeLogo.png';
import about from './assets/about.png';
import one from './assets/one.svg';
import two from './assets/two.svg';
import three from './assets/three.svg';
import four from './assets/four.svg';
import five from './assets/five.svg';
import six from './assets/six.svg';
import flex1 from './assets/flex1.jpg';
import flex2 from './assets/flex2.jpg';
import flex3 from './assets/flex3.webp';
import flex4 from './assets/flex4.jpg';
import starLogo from './assets/starLogo.png';
import last from './assets/last.png';
import hero1 from './assets/hero1.png';
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos'; // Import the AOS library
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate elements once
    });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('isMenuOpen:', isMenuOpen); 
  };

   
  return (
    <div className="bodycontainer">
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
          <nav className={`site-navbar ${isMenuOpen ? 'open' : ''}`}>
            <h1>
           <span class="black-text">FLIRTY</span>
           <span class="gray-text">CARLOS</span>
            </h1>

              <ul>
              <li>
                  <a href="#home" onClick={toggleMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={toggleMenu}>
                    About us
                  </a>
                </li>
                <li>
                  <a href="#classes" onClick={toggleMenu}>
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#page" onClick={toggleMenu}>
                    Page
                  </a>
                </li>
                
                <li>
                  <a href="#services" onClick={toggleMenu}>
                    Service
                  </a>
                </li>
              </ul>
              <div className="nav-log">
              <div className="social-icons">
              <a href="https://www.facebook.com/p/Flirty-carlos-100070605289537/">
                <FaFacebook />
                  </a>
              
                  <a href="https://www.instagram.com/flirty_carlos/">
                  <FaInstagram />
                  </a>
                  <a href="https://www.youtube.com/@dancewithflirtycarlos2962">
                  <FaYoutube />
                  </a>
                </div>
                </div>
                <button className="nav-toggler" onClick={toggleMenu}>
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div id="home" className="dance-container">
        {/* ... Home content */}
        <div className="fit">
          <img id="dance-logo" src= {hero}alt="Dancer"></img>
        </div>
        <div className="lets-dance">
          <p id="text">LET'S <br/> DANCE</p>
        </div>
        <div className="buttons">
          <button id="learn-more">Join the Move</button>
          <div className="ping-container">
            <button id="video"> <i className="fa-solid fa-play"></i></button>
          </div>
        </div>
      </div>

      <div id="about" className="about">
        {/* ... About content */}
        <div>
    <h1>Dance School & Studio</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid minus r</p>
  </div>
  <div className="sidereveal">
    <div>
      <i className="icon fa-solid fa-user-check"></i>
    </div>
    <h2>Professional</h2>
    <p>Lorem ipsum dolor,</p>
  </div>
  <div className="reveal">
    <div>
      <i className="fa-solid fa-user icon"></i>
    </div>
    <h2>Expert team</h2>
    <p>Lorem ipsum dolor,</p>
  </div>
  <div>
    <div>
      <i className="icon fa-solid fa-check-double"></i>
    </div>
    <h2>Experienced</h2>
    <p>Lorem ipsum dolor,</p>
  </div>
      </div>

      <div className="aboutDanze">
        {/* ... About Danze content */}
        <div id="danze-picture">
    <img className="reveal"src={hero1} alt="about" />
  </div>

  <div id="danze-about">
    <div id="item1">
      <h1>ABOUT - FLIRTY </h1>
      <p>
      Dancepreneur/Brand ambassador 👑♊️ <br />
      Award winning Dancer 🌍🏆<br />
      Bookings flirtycarlos@gmail.com
      </p>
      <h2>FLIRTY CARLOS DANCE CREW</h2>
      <h3>FLIRTY CARLOS</h3>
    </div>
    <div id="section_counter" className="item2">
        <div className="counter-item reveal">
          <CountUp start={0} end={65} duration={2.5} decimals={0} separator="," />
          <p>Dancer</p>
        </div>
        <div className="counter-item sidereveal">
          <CountUp start={0} end={49} duration={2.5} decimals={0} separator="," />
          <p>CHREOGRAPHY</p>
        </div>
        <div className="counter-item">
          <CountUp start={0} end={56} duration={2.5} decimals={0} separator="," />
          <p>TUTOR</p>
        </div>
      </div>
  </div>
      </div>

      <section>
        <div id="classes" className="classes">
          {/* ... Classes content */}
          <h1>Choose Your Dance Class</h1>
          <p>lorem ispsum valer and itel nets say lorel ma ke lez ze and tel</p>
        </div>

        <div className="classes-section">
  <div className="ballet 1 reveal">
    <img className="svg-logo" src= {one} alt="Ballet" />
    <h2>ballet</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae
      quasi placeat, maiores perspiciatis ea labore
    </p>
    <br />
    <h4>learn more</h4>
  </div>
  <div className="hiphop 2 sidereveal">
    <img className="svg-logo" src= {two} alt="Hip Hop" />
    <h2>hiphop</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae
      quasi placeat, maiores perspiciatis ea labore
    </p>
    <br />
    <h4>learn more</h4>
  </div>
  <div className="contemporary 3 reveal">
    <img className="svg-logo" src= {three} alt="Contemporary" />
    <h2>CON</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae
      quasi placeat, maiores perspiciatis ea labore
    </p>
    <br />
    <h4>learn more</h4>
  </div>
  <div className="poledance 4 reveal">
    <img className="svg-logo" src= {four} alt="Pole Dance" />
    <h2>pole</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae
      quasi placeat, maiores perspiciatis ea labore
    </p>
    <br />
    <h4>learn more</h4>
  </div>
  <div id="page" className="breakdance 5 reveal">
    <img className="svg-logo" src= {five} alt="Breakdance" />
    <h2>break</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae
      quasi placeat, maiores perspiciatis ea labore
    </p>
    <br />
    <h4>learn more</h4>
  </div>
  <div className="kpop 6">
    <img className="svg-logo" src= {six} alt="K-Pop" />
    <h2>kpop</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae
      quasi placeat, maiores perspiciatis ea labore
    </p>
    <br />
    <h4>learn more</h4>
  </div>
</div>

        <div className="image-grid-container">
  <div className="imagebox">
    <img src= {flex1} alt="Image 1" />
  </div>

  <div className="imagebox">
    <img src= {flex2} alt="Image 2" />
  </div>

  <div className="imagebox">
    <img src= {flex3} alt="Image 3" />
  </div>

  <div className="imagebox">
  <img src= {flex4} alt="Image 4" />
  </div>
</div>

      </section>

      <div className="client-say">
  <div className="learn-more reveal">
    <h1>What Clients Say</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
    <button id="client-btn">Learn More</button>
  </div>
  <div className="contacts-card">
    <div>
      <h1>,,</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <img id="star-logo" src= {starLogo} alt="Star Logo" />
    </div>
  </div>
</div>


      <div className="General">
  <div className="general-ques reveal">
    <img src= {hero1} alt="Last Image" />
  </div>
  <div className="ques">
    <h1>general question</h1>
    <details className="styled">
      <p>
        and behavior through JavaScript/react updates. Writing HTML, design-agnostic as it should be, as a front end developer I want to solve people's problems and real-world problems through code.
      </p>
      <summary className="">HOW MUCH IS DOES IT COST FOR TRAINING?</summary>
    </details>

    <details className="styled">
      <p>
        should be, as a front end developer, I want to solve people's problems and real-world problems, making life easier for the everyday person through code.
      </p>
      <summary className="">HOW CAN I GET MERCHANDISE?</summary>
    </details>

    <details className="styled">
      <div className="padding">
        <p>
          efficiency, to handle presentational changes through CSS updates and behavior through JavaScript/react updates. Writing HTML, design-agnostic as it should be, as a front end developer, I want to solve people's problems and real-world problems, making life easier for the everyday person through code.
        </p>
      </div>
      <summary className="">WHEN DO YOU HAVE DANCE CLASSES?</summary>
    </details>
  </div>
</div>
      <footer>
  <div className="contact1">
    <h1>Flirty</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Ut eli
      t tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
  </div>
  <div id="services" className="contact2 reveal">
    <h2>Navigation</h2>
    <p>pages</p>
    <p>about us</p>
    <p>gallery</p>
    <p>home</p>
    <p>services</p>
  </div>
  <div className="contact3 reveal">
    <h2>Quick Link</h2>
    <p>Contact Us</p>
    <p>FAQs</p>
    <p>Contact</p>
    <p>Blog</p>
    <p>Class</p>
  </div>
  <div className="contact4">
    <h2>Work Hours</h2>
    <p>7 AM - 5 PM, Mon - Sat</p>
    <p>WE ARE AVAILABLE AT NAIROBI .</p>
    <button id="client-btn">call us</button>
  </div>
</footer>

      <div className="footer2">
        <p>© 2023 FLIRTY-CARLOS • All Rights Reserved</p>
        <p>Privacy Policy • Terms of Service • Sitemap</p>
        <br/>
        <p>PAGE DESIGNED BY <a href="https://olivebishop.me" target="_blank">OLIVE🦉</a></p>

        
      </div>
    </div>
  );
}

export default App;
