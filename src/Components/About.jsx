import React, { useEffect } from "react";
// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="about">
        <div className="my_info" data-aos="fade-right" data-aos-offset="300">
          <div className="item">
            <p>- NICE TO MEET YOU!</p>
            <h1>Manish Thakur</h1>
            <h2>
              <TypeAnimation
                sequence={[
                  "Web Designer & Developer",
                  2000,
                  "", // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "17px" }}
              />
            </h2>
            <Link to="/portfolio">
              <button style={{ cursor: "pointer" }} className="btn3">
                Got a project?
              </button>
            </Link>
          </div>
          <div className="info_text">
            <p>
              Hello there! My name is{" "}
              <span style={{ color: "orange" }}>Manish Thakur.</span> I am a web
              designer & developer, and I'm very passionate and dedicated to my
              work.
              <br />
              <br />
              Innovative MERN Stack Developer with a passion for creating
              dynamic and responsive web applications. Adept in both frontend
              and backend development, with hands-on experience in HTML5, CSS3,
              JavaScript, React.js, Node.js, and MongoDB, Rest API. Skilled in
              building and optimizing web applications, and continuously seeking
              to expand knowledge in emerging web technologies.
            </p>
          </div>
        </div>

        <div id="skills">
          <p>- SKILLS</p>
          <h2>Tech Stacks I Use</h2>
          <div className="skill_con">
            <div className="item">
              <img src="Images/html.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>HTML</h2>
                <p>Mark-Up</p>
              </div>
            </div>

            <div className="item">
              <img src="Images/css.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>CSS</h2>
                <p>Style Sheet</p>
              </div>
            </div>

            <div className="item">
              <img src="Images/js.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>JavaScript</h2>
                <p>Programming</p>
              </div>
            </div>

            <div className="item">
              <img src="Images/bootstrap.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>Bootstrap</h2>
                <p>CSS Framework</p>
              </div>
            </div>

            <div className="item">
              <img src="https://plugins.jetbrains.com/files/15321/401950/icon/pluginIcon.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>Tailwind CSS</h2>
                <p>CSS Framework</p>
              </div>
            </div>

            <div className="item">
              <img src="Images/react.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>React</h2>
                <p>Js Library</p>
              </div>
            </div>

            <div className="item">
              <img src="Images/mui.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>Material UI</h2>
                <p>UI Library</p>
              </div>
            </div>

            <div className="item">
              <img src="Images/java.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>Java</h2>
                <p>Programming</p>
              </div>
            </div>

            <div className="item">
              <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
              <div style={{ marginLeft: "25px" }}>
                <h2>Node.js</h2>
                <p>Backend</p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png"
                alt=""
              />
              <div style={{ marginLeft: "25px" }}>
                <h2>mongoDB</h2>
                <p>Database</p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
              />
              <div style={{ marginLeft: "25px" }}>
                <h2>Git & GitHub</h2>
                <p>Version Control</p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://cdn.worldvectorlogo.com/logos/postman.svg"
                alt=""
              />
              <div style={{ marginLeft: "25px" }}>
                <h2>Postman</h2>
                <p>API Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
