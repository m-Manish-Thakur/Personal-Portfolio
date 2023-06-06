import React, {useEffect} from 'react'
// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {


    useEffect(() => {
        AOS.init();
      }, [])
    



  return (
    <>
        <div id="portfolio">
                        <p>- PROJECTS</p>
                        <h2>Recent completed works</h2>

                        <div className='portfolio_con'>
                            <div className="item" data-aos="zoom-in" data-aos-duration="1500">
                                <div>
                                    <img src="Images/amazon.jpg" />
                                </div>
                                <h2>Amazon Clone</h2>
                                <p>This is Amazon's UI Clone build using <b>ReactJs, Javascript, CSS3</b> . It has a variety of categories, just visit the product listing page and you will see all the products. I design it Responsive and add signUp, signIn pages.</p>
                                <div className="buttons">
                                    <a href="https://amazon-clone-manish-thakur.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a>
                                    <a href="https://github.com/Manishthakur231690/Amazon-Clone" target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" data-aos="zoom-in" data-aos-duration="1500">
                                <div>
                                    <img src="Images/tesla.jpg" />
                                </div>
                                <h2>Tesla Clone</h2>
                                <p>I have developed this tesla's clone web application using <b>ReactJs, Javascript, CSS3.</b> It has various pages like Model S, Model Y, Model 3 connect via React Routers. It is Responsive for all screen size. I use Scroll up/down animations.</p>
                                <div className="buttons">
                                    <a href="https://manish-tesla-clone.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a>
                                    <a href="https://github.com/Manishthakur231690/Tesla-Clone" target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/business.jpg" />
                                </div>
                                <h2>Business Website</h2>
                                <p>I have developed this Bootstrap Based template website using <b> HTML, CSS, Javascript, Bootstrap.</b> I design it fully responsive for all devices. And I add dark/light mode effect and scroll up/down animations.</p>
                                <div className="buttons">
                                    <a href="https://business-website-clone.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a>
                                    <a href="https://github.com/Manishthakur231690/UI-Website" target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/clinic.jpg" />
                                </div>
                                <h2>Clinic Website</h2>
                                <p>It's a clinic website that I develop using <b>HTML, CSS, Js, Bootstrap.</b> It is responsive for all screens. It has various pages like about, contact us, testimonials and specialists page</p>
                                <div className="buttons">
                                    <a href="https://clinic-website-manish.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a>
                                    <a href="https://github.com/Manishthakur231690/Clinic-website" target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item">
                                <div>
                                    <img src="Images/facebook.jpg" />
                                </div>
                                <h2>Facebook UI Clone</h2>
                                <p>This is 'Facebook UI Clone' build using <b> ReactJs, CSS3, JavaScript.</b> In which I create various pages of facebook like profile page, friend request page.
                                I make it <b> Fully Responsive.</b></p>
                                <div className="buttons">
                                    <a href="https://silly-tanuki-0206ed.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a>
                                    <a href="https://github.com/Manishthakur231690/Facebook-Clone" target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item">
                                <div>
                                    <img src="Images/weather.jpg" />
                                </div>
                                <h2>Weather App</h2>
                                <p>It's a weather app to show the weather forecast details using weather APIs and here you can search your city and see weather. I use in this 
                                    <b> HTML, CSS3, Js, Open Weather APIs.</b></p>
                                <div className="buttons">
                                    <a href="https://jocular-faloodeh-fb0c53.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a>
                                    <a href="https://github.com/Manishthakur231690/Weather-App" target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                        </div>



        </div>

    </>
  )
}

export default Portfolio
