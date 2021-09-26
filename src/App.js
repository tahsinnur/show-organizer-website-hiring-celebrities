import './App.css';
import Header from './components/Header/Header';
import Performers from './components/Performers/Performers';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div style={{fontFamily:"'Rajdhani', sans-serif"}} className="App">
      <Header></Header>
      <div className="container mx-auto row mt-3">
        <div className="col-md-9">
          <Performers></Performers>
        </div>
        <div className="col-md-3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
