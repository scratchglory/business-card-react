import React from 'react';
import './css/App.css'
import './css/Contact.css'
import Contact from './containers/contact-info'
import Footer from './containers/footer'

function App() {
  return (
    <div className="App">
      <div className="profile-image">
        <img src="https://imgs.search.brave.com/lljs8z0-G5NkKn_mzQAiru0dKjTRqN_NE9qxBYXEi18/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/ZmZGUlNnak9SX0ZV/azJ4SWF4R1BBSGFF/OCZwaWQ9QXBp" alt="head shot of hamburgler"/>
      </div> {/* emd or "profile-image" */}

        <div className="profile-header">
          <h2>Laura Smith</h2>
          <h4>Frontend Developer</h4>
          <a href="www.google.com">laurasmith.website</a>
        </div> {/* end of "profile-information" */}
        
        <Contact />


        <div className="profile-details">
          <div className="About">
            <h3>About</h3>
            <p>I am a frontend developer witha  particular interest in making things simple and automating daily tasks. I try to keep up with the security and best practices, and am always looking for new things to learn.</p>
          </div>
          <div className="Interests">
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. travel geek. Pop culture ninja. Coffee fanatic</p>
          </div>
        </div> {/* end of "profile-details" */}

      <Footer />
    </div> // end of App 
  );
}

export default App;
