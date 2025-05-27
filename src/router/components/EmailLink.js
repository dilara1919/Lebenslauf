import {FaEnvelope} from 'react-icons/fa';


// E-Mail-Komponente
export default function EmailLink () {
  return (
    <div className="email-container">
      <a
        href="mailto:dilara45-@hotmail.de?subject=Interesting%20Job-Offer%20&body=I%20want%20to%20hire%20you."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#333',
          textDecoration: 'none',
        }}
      >
        <FaEnvelope style={{ fontSize: '2rem' }} />
      </a>
    </div>
  );
};