
import { FaReact, FaPython, FaGitAlt, FaDatabase, FaUnity } from 'react-icons/fa';
import SkillCard from './components/SkillCard';
import './Work.css'; // Optional für Styles
import { FaC, FaR } from 'react-icons/fa6';
import Timeline from './components/TimeLine'; // Importiere die Timeline-Komponente

export default function Work() {
  return (
    <div className="work-page">
      <div>
      <Timeline />
    </div>
      <h2 className='work-title'>Computer skills</h2>
      <div className="skills-grid">
        <SkillCard icon={<FaC size={20} />} title="C#" level="Good" />
        <SkillCard icon={<FaUnity size={20} />} title="Unity" level="Good" />
        <SkillCard icon={<FaR size={20} />} title="R" level="Good" />
        <SkillCard icon={<FaPython size={20} />} title="Python" level="Good" />
        <SkillCard icon={<FaGitAlt size={20} />} title="Git" level="Good" />
        <SkillCard icon={<FaDatabase size={20} />} title="SQL" level="Basic knowledge" />
         <SkillCard icon={<FaReact size={20} />} title="React" level="Basic knowledge" />
      </div>

      <div className="work-preview">
      <h2 className="work-title">Work</h2>
       <p className="pdf-title">
       I developed the frontend for a system that combines different library prep sets to optimize sequencing run load.<br />
       It selects index sets with maximal edit distances to minimize cross-contamination, balances signal distribution, and<br />
        supports mixing paired- and single-index kits of varying lengths for accurate sequencing.
      </p>
      {/* PDF-Vorschau */}
      <iframe
        src="/ExpressoBar.pdf"
        className="pdf-preview"
        title="PDF Vorschau"
      ></iframe>

         {/* Buttons */}
      <div className="button-group">
        <a
          href="/ExpressoBar.pdf"
          download
          className="custom-button"
        >
          📄 PDF download
        </a>

        <a
          href="https://gitlab.com/bfr_bioinformatics/expresso-bar/-/tree/master?ref_type=heads"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-button"
        >
          💻 GitHub 
        </a>
      </div>
    </div>
    </div>

    
  );
}
