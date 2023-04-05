import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import MuiNavBar from './Components/MuiNavBar';

function App() {
  return (
    <div className="App">
      <MuiNavBar />
      <Home />
    </div>
  );
}

export default App;
