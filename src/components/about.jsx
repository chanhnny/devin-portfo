import './about.css';
import DonatelloGif from '/src/images/donatello.gif'
import ReactIcon from '/src/images/react.png'
import HtmlIcon from '/src/images/html.png'
import CssIcon from '/src/images/css.png'
import PythonIcon from '/src/images/python.png'
import CIcon from '/src/images/c.png'
import JavaIcon from '/src/images/java.png'
import LinuxIcon from '/src/images/linux.png'
import GitIcon from '/src/images/git.png'
import SqlIcon from '/src/images/sql.png'
import PostmanIcon from '/src/images/postman.png'
import JSIcon from '/src/images/js.png'
import DockerIcon from '/src/images/docker.png'
import AWSIcon from '/src/images/aws.png'
import AzureIcon from '/src/images/azure.png'
import PostgreIcon from '/src/images/postgre.png'
import KotlinIcon from '/src/images/kotlin.png'

const About = () => {
  return (
    <>
    <div className="header-wrapper"  style={{ paddingTop: "4rem" }} id="about">
        <p className="header">About</p>
    </div>
    <section className="about-section">
      <div className="about-text" data-aos="zoom-in-up">
        <div className="about-text-inner">
          <img className="donatello" src={DonatelloGif} alt="Devin" />
          <p>
          Technology never stops evolving, and neither will I. As a fullstack developer, I push myself to stay ahead, adapt, and grow 
          with every change in the field. My goal is not to write code, but to use technology to make a meaningful impact. 
          I've done so by contributing to projects that serve real world needs, ranging from corporate applications to educational platforms.
          I rethink, optimize, and innovate to deliver solutions that go beyond what's expected.
          </p>
        </div>
      </div>

      <div className="about-icons">
        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in" data-aos-duration="1200">
                <img src={ReactIcon} alt="React" />
                <span>React</span>
            </div>
        </div>
        
         <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={JavaIcon} alt="Java" />
                <span>Java</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={SqlIcon} alt="Sql" />
                <span>SQL</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={LinuxIcon} alt="Linux" />
                <span>Linux</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={HtmlIcon} alt="Html" />
                <span>Html</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={PythonIcon} alt="Python" />
                <span>Python</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={PostgreIcon} alt="Postgre" />
                <span>Postgre</span>
            </div>
        </div>
        
        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={PostmanIcon} alt="Postman" />
                <span>Postman API</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={CssIcon} alt="Css" />
                <span>Css</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={CIcon} alt="C" />
                <span>C</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={DockerIcon} alt="Docker" />
                <span>Docker</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={AWSIcon} alt="AWS" />
                <span>AWS</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={JSIcon} alt="JS" />
                <span>JavaScript</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={KotlinIcon} alt="Kotlin" />
                <span>Kotin</span>
            </div>
        </div>

        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={GitIcon} alt="Git" />
                <span>Git</span>
            </div>
        </div>
        
        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in">
                <img src={AzureIcon} alt="Azure" />
                <span>Azure</span>
            </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;