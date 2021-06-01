import { StyledAppContainer } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Componentsguatame
import PocketsUser from './components/organisms/PocketsUser/PocketsUser.js';

function App() {
  return (
    <StyledAppContainer>
      <IconsCollection />
      <PocketsUser />
    </StyledAppContainer>
  );
}

export default App;
