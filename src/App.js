import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <SidePanel />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;
