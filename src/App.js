import './App.css';

import Navbar from './components/Navbar'
import logomobile from './components/logomobile.svg'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div style={{ backgroundColor: '#1a1218', width: '100%', height: '2000px' }}>

        </div>
      </main>
      <footer>
        <div className='footer-container'>
          <div className='footer'>
            <div className='footer-logo'>
              <img src={logomobile} alt='FilmGraphs logo' />
            </div>
            <div className='footer-contact-us'>
              Contact Us
            </div>
            <div className='footer-text'>
              © 2021 FilmGraphs
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
