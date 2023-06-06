import React, {useEffect} from 'react'
// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const About = () => {


    useEffect(() => {
        AOS.init();
      }, [])
    





  return (
    <>
            <div id="about">
                    <div className='my_info' data-aos="fade-right" data-aos-offset="300">
                            <div className='item'>
                                    <p>- NICE TO MEET YOU!</p>
                                    <h1>Manish Thakur</h1>
                                    <h2>Web designer & developer</h2>
                                    <Link to='/portfolio'><button style={{cursor:'pointer'}}>Got a project?</button></Link>
                            </div>
                            <div className='info_text'>
                                    <p>
                                    
                                    Hello there! My name is <span style={{color:'orange'}}>Manish Thakur.</span> I am a web designer & developer, and I'm very passionate and dedicated to my work.
                                    <br /><br />
                                        Innovative Frontend Developer with a solid understanding of Web Development, developing
                                       web applications using HTML, CSS3, JS and Frameworks like Bootstrap, React.js . Good working knowledge in Frontend Development.
        
                                       As a Web Developer, my objective is to make a positive impact on client using my skills and experience to develop attractive websites.</p>
                            </div>
                    </div>

                    <div id="skills">
                        <p>- SKILLS</p>
                        <h2>Tech Stacks I Use</h2>
                        <div className="skill_con">
                                <div className='item'>
                                    <img src="Images/html.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>HTML</h2>
                                        <p>Mark-Up</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/css.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>CSS</h2>
                                        <p>Style Sheet</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/js.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>JavaScript</h2>
                                        <p>Programming</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/bootstrap.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>Bootstrap</h2>
                                        <p>CSS Framework</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/react.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>React</h2>
                                        <p>Js Library</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/mui.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>Material UI</h2>
                                        <p>UI Library</p>
                                    </div>
                                </div>


                                <div className='item'>
                                    <img src="Images/java.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>Java</h2>
                                        <p>Programming</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/php1.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>PHP</h2>
                                        <p>Backend</p>
                                    </div>
                                </div>

                                <div className='item' >
                                    <img src="Images/mysql.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>MySql</h2>
                                        <p>Database</p>
                                    </div>
                                </div>

                        </div>
                    </div>
            </div>
    </>
  )
}

export default About
