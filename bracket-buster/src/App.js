import './App.css';
import Description from './components/Description';
import Navbar from './components/Navbar';
import Flags from './components/Flags';
import Bracket from './components/Bracket'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <Flags />
      <Bracket />
    </div>
  );
}

export default App;
