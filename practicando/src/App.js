import planetaTierra from './assets/planetaTierra.jpg' ;
import videoNave from './assets/videoNave.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={planetaTierra} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video src={videoNave} type="video/mp4"  className="video" ></video> 
        </a>
      </header>
    </div>
  );
}

export default App;
