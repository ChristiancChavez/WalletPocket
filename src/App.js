import { StyledAppContainer } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Components 
import PocketList from './components/organisms/PocketList/PocketList';

function App() {
  return (
    <StyledAppContainer>
      <IconsCollection />
      <h1>Wallet Pocket</h1>
      {
        [1,2,3].map(item => <PocketList />)
      }
      
    </StyledAppContainer>
  );
}

export default App;
