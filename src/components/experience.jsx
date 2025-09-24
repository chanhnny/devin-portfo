import './experience.css';
import RenewImage from '/src/images/renew.png';
import BrBytesImage from '/src/images/brbytes.png';
import EntergyLogo from '/src/images/entergylogo.png'
import BrBytesLogo from '/src/images/brbyteslogo.png';

const Experience = () => {
    return (
        <>
        <div className="header-wrapper" style={{ paddingTop: "4rem" }} id="experience">
            <p className="header" >Experience</p>
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
                        <p paddingBottom="1rem">
                            Project RENEW is a customer facing web and mobile platform that enables residential and commercial users across five Entergy operating companies to explore, enroll in, and manage renewable energy plans. I contributed across the stack by:<br></br>
                        </p>
                    <p>
                        <b>Frontend Development : </b> Designed and built responsive, accessible user interfaces using React and Chakra UI, emphasising consistent component reuse across multiple pages.<br></br>
                        <b>Backend/API Integration :</b> Integrated REST APIs to securely handle customer signups and account management, transmitting form data to Entergy’s internal backend systems and databases.<br></br>
                        <b>Cloud Deployment :</b> Conducted live server testing and performed cloud based deployments on AWS, improving reliability and scalability for thousands of users.<br></br>
                        <b>Agile Collaboration :</b> Collaborated with senior developers, UX designers, and product owners in bi-weekly sprints, participating in code reviews, design evaluations, and UML system diagram reviews to align technical implementation with business goals.<br></br>
                        <b>Impact :</b> Enabled thousands of residential and commercial customers to seamlessly purchase and learn about renewable energy, directly supporting Entergy’s clean energy initiatives.
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
                        <p paddingBottom="1rem">
                            BRBYTES is a nonprofit educational organization with a mission to advance computer science education across Louisiana. I contributed to development across the stack by :<br></br>
                        </p>
                    <p>
                        <b>Frontend Development :</b> Built responsive features for the BRBytes homepage, teacher’s portal, and lesson editor using HTML, Bootstrap, and Alpine.js, improving usability, navigation, and accessibility.<br></br>
                        <b>Backend/API Integration :</b> Developed backend RESTful API integrations with Express.js to enable seamless lesson creation, updates, and retrieval, ensuring real time functionality for teachers.<br></br>
                        <b>Database Architecture :</b> Designed and optimized a SQL based backend database to support 100+ dynamic lessons, scalable user growth, and new platform features.<br></br>
                        <b>System Optimization :</b> Improved build and reload performance by implementing Dhall configurations, achieving a 300% faster system performance during development cycles.<br></br>
                        <b>Collaboration :</b> Partnered with professors, teachers, and mentors to gather feedback and translate classroom needs into technical specifications and platform features.<br></br>
                        <b>Impact :</b> Delivered website optimizations that made the BRBYTES site more accessible and user friendly, while equipping 200+ teachers across 100 schools with effective digital tools to plan, update, and present lessons for 15,000+ students.
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