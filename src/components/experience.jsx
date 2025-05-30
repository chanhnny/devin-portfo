import './experience.css';
import RenewImage from '/src/images/renew.png';
import BrBytesImage from '/src/images/brbytes.png';
import EntergyLogo from '/src/images/entergylogo.png'
import BrBytesLogo from '/src/images/brbyteslogo.png';

const Experience = () => {
    return (
        <>
        <div className="header-wrapper" id="experience">
            <p className="header">Experience</p>
        </div>

        <section className="experience-project notflipped">
            <div className="project-content" data-aos="zoom-in-left">
                <div className="project-image">
                    <img src={RenewImage} alt="Project RENEW front page" />
                </div>

                <div className="project-details">
                   <div className="project-heading">
                        <img className="logo" src={EntergyLogo} alt="Entergy logo" />
                        <span className="company-name">Entergy</span>
                    </div>
                    <h3>Software Developer Intern</h3>
                    <p>
                    Project RENEW is a customer-facing platform that lets businesses enroll in renewable energy plans. I helped design and build responsive, accessible pages using React and Chakra UI, integrated REST APIs to submit form data to Entergy’s internal systems, and collaborated closely with UX and senior developers in agile sprints. Live-tested and deployed via AWS.
                    </p>
                    <div className="project-links">
                        <a href="https://renew.entergy.com/" target="_blank" className="project-link">LIVE PAGE</a>
                        <a href="https://renew-arkansas.entergy.com/green-promise/pricing" target="_blank" className="project-link">EXAMPLE PLAN</a>
                        <a href="https://renew-arkansas.entergy.com/form?program=green-promise" target="_blank" className="project-link">EXAMPLE FORM</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="experience-project flipped" data-aos="zoom-in-right" data-aos-duration="1200">
            <div className="project-content">
                <div className="project-details">
                    <img className="logo" src={BrBytesLogo}/>
                    <h3>Web Developer Intern</h3>
                    <p>
                        Frontend and backend development for the BRBytes home page, teacher's portal, and lesson editor. Built responsive features with Alpine JS to improve usability and navigation. POSTMAN APIs to support lesson creation and updates. Redesign of the backend database to support new features and align with the platform’s evolving needs.
                    </p>
                </div>
                <div className="project-image">
                    <img src={BrBytesImage} alt="BRBytes" />
                </div>
            </div>
        </section>
        </>
    );
};

export default Experience;