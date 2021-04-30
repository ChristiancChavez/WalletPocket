import { StyledAppContainer } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Components 
import Background from './components/templates/Background/Background';
import PocketList from './components/organisms/PocketList/PocketList';

function App() {
  return (
    <StyledAppContainer>
      <IconsCollection />
      <Background />
      <PocketList />
    </StyledAppContainer>
  );
}

export default App;
