import { StyledAppContainer } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Components 
import PocketList from './components/organisms/PocketList/PocketList';
import WalletBalance from './components/organisms/WalletBalance/WalletBalance';

function App() {
  return (
    <StyledAppContainer>
      <IconsCollection />
      <h1>Wallet Pocket</h1>
      <WalletBalance />
    </StyledAppContainer>
  );
}

export default App;
