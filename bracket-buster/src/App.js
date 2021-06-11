import './App.css';
import Description from './components/Description';
import Navbar from './components/Navbar';
import Flags from './components/Flags';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <Flags />
    </div>
  );
}

export default App;
