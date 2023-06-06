import React, {useEffect} from 'react'
import './Style.css'
// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    

  return (
    <>
           <div id="services">
                    <p>- SERVICES</p>
                    <h2>Services That I Provide</h2>

                    <div className="serv_con">
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">
                                <i class="fa-solid fa-code"></i>
                                <h3>Website Creation</h3>
                                <p>I will build any kind of fully Responsive Website for your Business.</p>
                            </div>
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">
                                <i class="fa-solid fa-code-compare"></i>
                                <h3>File Conversion</h3>
                                <p>I will convert PSD to HTML, Figma to HTML websites and vice versa.</p>

                            </div>
                            <div className="item">
                                <i class="fa-solid fa-screwdriver-wrench"></i>
                                <h3>Customization</h3>
                                <p>I will do any customization for your prebuild HTML Website.</p>

                            </div>
                    </div>
           </div>
    </>
  )
}

export default Services
