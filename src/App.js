import { StyledAppContainer } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Componentsguatame
import Home from './components/templates/Home/Home';

function App() {
  return (
    <StyledAppContainer>
      <IconsCollection />
      <Home />
    </StyledAppContainer>
  );
}

export default App;
