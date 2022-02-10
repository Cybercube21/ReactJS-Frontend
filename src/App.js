import './App.css';
import './styles.css';


var meme;
var meme_json;
var meme_fileExt;

function httpGet(theUrl) {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
   xmlHttp.send( null );
   return xmlHttp.responseText;
}

function reset_meme(){
   // Make img hidden
   var el = document.getElementById('hiddencontainer')
   el.children[0].setAttribute('src', '')
   el.setAttribute('style', '')
   el.setAttribute('style', 'display: none;')

   // Make video hidden
   el.children[1].setAttribute('src', '')
   el.setAttribute('style', '')
   el.setAttribute('style', 'display: none;')
}

function load_meme(){
   reset_meme()
   meme = httpGet('https://api.cybercube21.de/memes')
   meme_json = JSON.parse(meme)
   meme_fileExt = meme_json.url.split('.').pop();

   var el = document.getElementById('hiddencontainer')
   var video = document.getElementsByTagName('video')
   if (meme_fileExt === "mp4") {
      // Make img hidden
      el.children[0].setAttribute('src', '')

      // Show Video
      el.children[1].setAttribute('src', meme_json.url)
      el.setAttribute('style', 'display: inline;')
      el.children[1].controls = true;
   }

   else if (meme_fileExt === "webp") {
      // Make Video hidden
      el.children[1].setAttribute('src', '')

      // Show img
      el.children[0].setAttribute('src', meme_json.url)
      el.setAttribute('style', 'display: inline;')
   }
   else {
      reset_meme()
   }
 }

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
                  <a href="https://cybercube21.de/contact.html" className="navbar__links"> Contact </a>
               </li>
            </ul>
         </div>
      </nav>
      <div className="center-object">
        <div className="wrapper">
          <main className='page-main'>
            <button className='load_button' id='modal_button' onClick={load_meme}>Test Button</button>
            <div className="container__pop-up" id="hiddencontainer">
               <img alt="" className="container__pop-up-img" src="" id="hiddenimage"/>
               <video alt="" className="container__pop-up-img" src="" id="hiddenimage" autoPlay playsInline loop/>
            </div>
          </main> 
        </div>
      </div>
    </div>
  );
}

export default App;
