import './App.css';
import IconsCollection from './Helpers/IconsCollection';
// Components 
import ProgressPocket from './components/molecules/ProgressPocket/ProgressPocket';
import PocketInfo from './components/molecules/PocketInfo/PocketInfo';
import PocketAddition from './components/molecules/PocketAddition/PocketAddition';

function App() {
  return (
    <div className="App">
      <IconsCollection />
      <h1>Wallet Pocket</h1>
      <ProgressPocket icon="plus" category="Other" />
      <ProgressPocket icon="airplane" category="Travel" />
      <h1> diferencias entre los dos pocket progress</h1>
      <ProgressPocket progress percentage="80" icon="airplane" category="Travel" />
      <ProgressPocket progress percentage="94" icon="home" category="Home" />
      <h1> Pocket info</h1>
      <PocketInfo icon="glass2" name="Parties" percentage="61" money="250.000" />
      <PocketInfo icon="plus" name="Computer" percentage="34" money="3.000.000" />
      <h1>Pocket addition</h1>
      <PocketAddition quantity="200.000" />
    </div>
  );
}

export default App;
