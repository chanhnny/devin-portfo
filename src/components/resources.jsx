import './Resources.css';
import LinkedInIcon from '/src/images/linkedinicon.webp';
import LsuIcon from '/src/images/lsuicon.png';
import GoogleDocsIcon from '/src/images/googledocsicon.png';
import OutlookIcon from '/src/images/outlookicon.png';
import Transcript from '/src/assets/DevinDaoTranscript.pdf';

const Resources = () => {
    return (
        <>
        <div className="header-wrapper" style={{ paddingTop: "4rem" }} id="resources">
            <p className="header">Resources</p>
        </div>

        <section className="resources-section">
            <div className="resource-card" data-aos="zoom-out-down">
                <img src={LinkedInIcon} alt="LinkedIn" className="resource-icon" />
                <a
                href="https://www.linkedin.com/in/chanh-devin-dao-79b591270/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
                >
                LinkedIn
                </a>
            </div>

            <div className="resource-card" data-aos="zoom-out-down">
                <img src={OutlookIcon} alt="Outlook" className="resource-icon" />
                <a 
                href="mailto:cdao4@lsu.edu" 
                className="resource-link">
                cdao4@lsu.edu
                </a>
    
            </div>

            <div className="resource-card" data-aos="zoom-out-down">
                <img src={GoogleDocsIcon} alt="Google Docs" className="resource-icon" />
                <a
                href="https://docs.google.com/document/d/1_FEAUiQ59jtpFAVxikdJplWvZ-7EK0E7l5nCdHwcooA/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
                >
                Resume
                </a>
            </div>

            <div className="resource-card" data-aos="zoom-out-down">
                <img src={LsuIcon} alt="Lsu" className="resource-icon" />
                <a
                href={Transcript}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
                >
                College Transcript
                </a>
            </div>
        </section>
        </>
    );
}

export default Resources;