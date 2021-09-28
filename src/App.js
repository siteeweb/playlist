import './App.css';
import logo from './image/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card/card.js'
import Button from './components/button/button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faStepForward, faStepBackward, faSearch, faTimesCircle, faVolumeOff} from '@fortawesome/free-solid-svg-icons';
import collapse from './components/functions/navbar-collapse';
import collapseout from './components/functions/navbar-collapseout';

function App() {

  return (
    <div className="App">
      <div className="head">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <img src={logo} width="200px"/>
          <button className="navbar-toggler" onClick={collapse} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <a href="#sidebar"><span className="navbar-toggler-icon"></span></a>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mi libreria
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="">Recientes</a>
                  <a className="dropdown-item" href="">Artistas</a>
                  <a className="dropdown-item" href="">Canciones</a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Mis reproducciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mis favoritos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mi biblioteca</a>
              </li>
            </ul>
            <div className="search">
              <div className="input-group">
                <input type="text" id="nom_artist" class="form-control" placeholder="Buscar"/>
                <a className="input-group-text btn-search"><FontAwesomeIcon icon={faSearch}/></a>
              </div>
            </div>
          </div>
        </nav>

        <div className="sidebar" id="sidebar">
          <button className="btn-sidebar" onClick={collapseout}>
            <FontAwesomeIcon icon={faTimesCircle}/>
          </button>
          <div className="main-sidebar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mi libreria
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="">Recientes</a>
                  <a className="dropdown-item" href="">Artistas</a>
                  <a className="dropdown-item" href="">Canciones</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mis reproducciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mis favoritos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mi biblioteca</a>
              </li>
            </ul>
            <center>
            <div className="search" id="search">
              <div className="input-group">
                <input type="text" class="form-control" placeholder="Buscar"/>
                <span className="input-group-text btn-search"><FontAwesomeIcon icon={faSearch}/></span>
              </div>
            </div>
            </center>
          </div>
        </div>
      </div>

      <div className="body" id="body">
        <div className="row portada">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <img src="https://i.ytimg.com/vi/LTfPsNDxqF8/maxresdefault.jpg" alt="" width="100%"></img>
          </div>
          <div className="descrip col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
            <h3>Eminem</h3>
            <p>Marshall Bruce Mathers III (St Joseph, 17 de octubre de 1972), conocido artísticamente como Eminem (estilizado como EMINƎM), es un cantante, productor discográfico y actor estadounidense, también conocido por su álter ego, Slim Shady</p>
            <Button
            url=""
            class="btn btn-danger"
            content="Reproducir"
            />
            <Button
            url=""
            class="btn btn-outline-danger m-3"
            content="Seguir"
            />
          </div>
        </div>
        <h3 className="text">Resultados</h3><hr/>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Card
              url="https://i.ytimg.com/vi/LTfPsNDxqF8/maxresdefault.jpg"
              song="8 Mile"
              name="Eminem"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Card
              url="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F967178236-850x560.jpeg"
              song="Easy love me now"
              name="50 cent"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Card
              url="https://images.clarin.com/2020/09/21/selena-gomez-fue-galardonada-con___5rnSJ0VFB_1200x630__1.jpg"
              song="Love you like a love song"
              name="Selena Gomez"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Card
              url="https://ichef.bbci.co.uk/images/ic/640x360/p05r3n9k.jpg"
              song="Talking To Moom"
              name="Bruno mars"
            />
          </div>
        </div>
      </div>

      <div className="footer container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 resume-music">
            <div>
              <img src="https://i.ytimg.com/vi/LTfPsNDxqF8/maxresdefault.jpg"/>
            </div>
            <div>
              <strong>8 Mile</strong><br/><label>Eminem</label>
            </div>
          </div>
          
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 controller-playlist">
            <span className="StepBackward">
              <FontAwesomeIcon icon={faStepBackward}/>
            </span>
            <span className="Play">
              <FontAwesomeIcon icon={faPlay}/>
            </span>
            <span className="StepForward">
              <FontAwesomeIcon icon={faStepForward}/>
            </span>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 controller-volume">
            <span className="Volume">
              <FontAwesomeIcon icon={faVolumeOff}/> <input type="range" min="0" max="5" value="1"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
