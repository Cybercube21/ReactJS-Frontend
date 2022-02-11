import './App.css';
import './styles.css';

import MemeContainer from './meme_container';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
         <div className="navbar__container">
            <div className="navbar__toggle">
               <span className="bar"></span>
               <span className="bar"></span>
               <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
               <li className="navbar__item">
                  <a href="https://cybercube21.de" className="navbar__links"> Home </a>
               </li>
               <li className="navbar__item">
                  <a href="/" className="navbar__links"> Memes </a>
               </li>
               <li className="navbar__item">
                  <a href="https://api.cybercube21.de" className="navbar__links"> API </a>
               </li>
               <li className="navbar__item">
                  <a href="https://cybercube21.de/contact.html" className="navbar__links"> Contact </a>
               </li>
            </ul>
         </div>
      </nav>
      <div className="center-object">
        <div className="wrapper">
          <main className='page-main'>
            <MemeContainer />
          </main> 
        </div>
      </div>
      <div className='footer'>
         <p className='p'>Wanna include them in your Website? Visit <a className="a" href="https://api.cybercube21.de">my API reference</a></p>
      </div>
    </div>
  );
}

export default App;