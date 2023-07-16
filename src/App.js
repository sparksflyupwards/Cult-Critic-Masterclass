import cultCritCat from './assets/cult-crit-cat.jpg';
import cap from "./assets/cap.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={cultCritCat} className="background-image" alt="logo" />
        
      <img src={cap} className="corner-cap" alt="logo" />

      <div className = "tag-name">The Masterclass</div>

      <div className = "cult-crit-tag">The Critical Kitty</div>
       
      {/* </header> */}
    </div>
  );
}

export default App;
