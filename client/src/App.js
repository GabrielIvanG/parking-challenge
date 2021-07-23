import logo from './logo.png';
import './App.css';
import ParkingSpots from './Components/ParkingSpots/ParkingSpots'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Parking lots/garages to bring into the 21st century
        </p>
        <ParkingSpots />
      </header>
    </div>
  );
}

export default App;
