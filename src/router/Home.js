// router/Home.js
import LinkedInLink from './components/LinkedInLink.js';  // Angenommen, das hast du schon
import EmailLink from './components/EmailLink.js';  // Angenommen, das hast du schon
import myImage from './assets/me.jpeg';  // Beispiel für das Bild

export default function Home() {
  return (
    <div className="home">
      <img
        className="image_me"
        src={myImage}
        alt="Description"
        style={{ width: '300px', borderRadius: '8px' }}
      />
      <p className="introduction">
        Hi there! My name is Dilara and I am a computer science student at the University of Humboldt in Berlin.
        I am currently in my Masters program and I am looking for a working student position.
      </p>
      <p className="introduction">
        I am passionate about coding and I love to learn new technologies. 
        I am currently learning React and I am excited to build amazing applications with it.
      </p>
      <div className="social-container">
        <div className="linkedin">
          <LinkedInLink />
        </div>
        <div className="email">
          <EmailLink />
        </div>
      </div>
      <div className="CV">
          <a
          href="/Lebenslauf.pdf"
          download
          className="custom-button"
          >
          📄 CV download
        </a>
        </div>
    </div>
  );
}
