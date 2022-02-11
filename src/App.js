import './App.css';
import './styles.css';
import './modal.js';
import './modal.css';
import meme from './memes/test.webp';


function App() {

   function load_memes(){ 
    
      var el = document.getElementById('hiddencontainer')
            el.children[1].setAttribute('src', '')
            el.setAttribute('style', '')
    
      el.setAttribute('style', 'display: inline;')
    }

  return (
    <div className="App">
      <nav className="navbar">
         <div id='navbar__title'>Cubie's delicious Memes</div>
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
                  <a href="https://cybercube21.de/contact.html" className="navbar__links"> Contact </a>
               </li>
            </ul>
         </div>
      </nav>
      <div className="center-object">
        <div className='load_button'>
          <button id='modal_button' onClick={load_memes}>Test Button</button>
        </div>
        <div className="wrapper">
          <main className='page-main'>
            <div id="container__modal" className="modal">
               <div className="container__pop-up" id="hiddencontainer">
                  <span className="close" />
                  <img alt="lul" className="container__pop-up-img" src="" id="hiddenimage" />
               </div>
            </div>
          </main> 
        </div>
      </div>
    </div>
  );
}

export default App;
