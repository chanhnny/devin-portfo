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
           Technology never stops evolving, and neither will I. I’m a fullstack developer driven by curiosity, creativity, and the desire to make things better. 
           From small quality of life improvements to large-scale impact, I aim to do more than just code. I rethink, optimize, and innovate.
          </p>
        </div>
      </div>

      <div className="about-icons">
        <div className="skill-icon">
            <div className="icon-box" data-aos="zoom-in" data-aos-duration="1200">
                <img src={ReactIcon} alt="React JS" />
                <span>React JS</span>
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
                <img src={JavaIcon} alt="Java" />
                <span>Java</span>
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
                <img src={LinuxIcon} alt="Linux" />
                <span>Linux</span>
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
                <img src={CssIcon} alt="Css" />
                <span>Css</span>
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
                <img src={CIcon} alt="C" />
                <span>C</span>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;