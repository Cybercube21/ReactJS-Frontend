import './App.css';
import './styles.css'

function App() {
  return (
    <div className="App">
      <nav class="navbar">
         <div class="navbar__container">
            <div class="navbar__toggle" id="mobile-menu">
               <span class="bar"></span>
               <span class="bar"></span>
               <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
               <li class="navbar__item">
                  <a href="https://cybercube21.de" class="navbar__links"> Home </a>
               </li>
               <li class="navbar__item">
                  <a href="/" onclick="memes_alert();" class="navbar__links"> Memes </a>
               </li>
               <li class="navbar__item">
                  <a href="https://cybercube21.de/contact.html" class="navbar__links"> Contact </a>
               </li>
            </ul>
         </div>
      </nav>
    </div>
  );
}

export default App;
