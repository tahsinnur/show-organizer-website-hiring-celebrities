import './App.css';
import Header from './components/Header/Header';
import Performers from './components/Performers/Performers';

function App() {
  return (
    <div style={{fontFamily:"'Rajdhani', sans-serif"}} className="App">
      <Header></Header>
      <Performers></Performers>
    </div>
  );
}

export default App;
