import React from "react";
import "./Style.css";
// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="Main">
        <img src="https://marketifythemes.net/html/dizme/img/brushes/contact/1.png" id="effect1" />
        <img src="https://marketifythemes.net/html/dizme/img/brushes/contact/2.png" id="effect2" />
        {/* <img src="https://marketifythemes.net/html/dizme/img/brushes/about/1.png" id='effect3' /> */}
        <div className="child_main">
          <div className="main_content" data-aos="fade-right" data-aos-offset="300">
            {/* <h1>Hi, I'm <span style={{color:'rgb(106, 130, 230)'}}>Manish!</span> <br /> Frontend Developer <br /> Based in Aligarh</h1> */}
            <h2>Hello, I'm </h2>
            <h1>
              Manish Thakur <span>👋</span>
            </h1>
            <div id="role">
              <div style={{ height: "1px", width: "80px", background: "#282856", marginRight: "10px" }}></div>
              <TypeAnimation
                sequence={[
                  "Frontend Developer", // Types 'One'
                  2000, // Waits 1s
                  "Fullstack Developer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "Backend Developer",
                  2000,
                  "", // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "23px" }}
              />
            </div>

            <p>
              A <span style={{ color: "rgb(106, 130, 250)" }}> Front-End Developer </span> passionate about creating
              intractive application and experience on the web.
            </p>

            <div className="button_group">
              <Link to="/about">
                <button className="btn1">
                  About Me <i class="fa-regular fa-paper-plane"></i>
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="btn2">
                  My Works <i class="fa-solid fa-arrow-up-long"></i>
                </button>
              </Link>
            </div>

            <div className="con_info">
              <div style={{ height: "90px", width: "4px", background: "orange" }}></div>
              <div style={{ marginLeft: "20px" }}>
                <h3>+91- 9634007020</h3>
                <h3>manishthakur231690@gmail.com</h3>
                <h3>Aligarh 202121, India</h3>
              </div>
            </div>
          </div>

          {/* <img src="Images/Main_img.png" id='main_img' /> */}
          <img src="https://www.jacobkantor.com/assets/img/memoji.jpg" id="main_img" />
        </div>
      </div>
    </>
  );
};

export default Main;
