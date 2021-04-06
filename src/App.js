import './App.css';
import IconsCollection from './Helpers/IconsCollection';
// Components 
import ProgressPocket from './components/molecules/ProgressPocket/ProgressPocket';

function App() {
  return (
    <div className="App">
      <IconsCollection />
      <h1>Wallet Pocket</h1>
      <ProgressPocket />
    </div>
  );
}

export default App;
