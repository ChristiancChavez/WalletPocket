import { StyledAppContainer } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Components
import InitialLogin from './components/templates/InitialLogin/InitialLogin';

function App() {
  return (
    <StyledAppContainer>
      <IconsCollection />
      <InitialLogin />
    </StyledAppContainer>
  );
}

export default App;
