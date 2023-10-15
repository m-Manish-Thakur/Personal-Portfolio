import React, {useEffect} from 'react'
import './Style.css'

const Services = () => {

  return (
    <>
           <div id="services">
              <img src="https://marketifythemes.net/html/dizme/img/brushes/contact/2.png" id='effect2' />
              <img src="https://marketifythemes.net/html/dizme/img/brushes/service/6.png" id='effect3' />
              <img src="https://marketifythemes.net/html/dizme/img/brushes/portfolio/1.png" style={{position:'absolute', bottom:'0'}} />
                    <p>- SERVICES</p>
                    <h2><span style={{color:'royalblue'}}>Services</span> That I Provide</h2>

                    <div className="serv_con">
                            <div className="item" >
                                {/* <i class="fa-solid fa-code"></i> */}
                                <img src="https://themewagon.github.io/satner/img/services/s1.png" alt="" />
                                <h3>Website Creation</h3>
                                <p>I will build any kind of fully Responsive Website for your Business.</p>
                            </div>
                            <div className="item" >
                                {/* <i class="fa-solid fa-code-compare"></i> */}
                                <img src="https://themewagon.github.io/satner/img/services/s2.png" alt="" />
                                <h3>File Conversion</h3>
                                <p>I will convert PSD to HTML, <br /> Figma to HTML websites and <br /> vice versa.</p>

                            </div>
                            <div className="item">
                                {/* <i class="fa-solid fa-screwdriver-wrench"></i> */}
                                <img src="https://themewagon.github.io/satner/img/services/s3.png" alt="" />
                                <h3>Customization</h3>
                                <p>I will do any customization <br /> for your prebuild HTML Website.</p>

                            </div>
                    </div>
           </div>
    </>
  )
}

export default Services
