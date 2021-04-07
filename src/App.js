import './App.css';
import IconsCollection from './Helpers/IconsCollection';
// Components 
import ProgressPocket from './components/molecules/ProgressPocket/ProgressPocket';
import PocketInfo from './components/molecules/PocketInfo/PocketInfo';

function App() {
  return (
    <div className="App">
      <IconsCollection />
      <h1>Wallet Pocket</h1>
      <ProgressPocket />
      <h1> diferencias entre los dos pocket progress</h1>
      <ProgressPocket progress  percentage={80} />
      <h1> Pocket info</h1>
      <PocketInfo />
    </div>
  );
}

export default App;
