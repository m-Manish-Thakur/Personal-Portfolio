import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Right_page from './Components/Right_page';
import Main from './Components/Main';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Services from './Components/services';
import Contact from './Components/Contact';



function App() {
  return (
    <>
      
        <div id='app-home'  style={{backgroundImage: 'url("Images/pattern1.png")'}}>
            <BrowserRouter>
            <Header />
              <Right_page />
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />

              </Routes>
          
            </BrowserRouter>
      
            </div>
    </>
  );
}

export default App;
