import { StyledAppContainer } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Componentsguatame
import PocketCategories from './components/templates/PocketCategories/PocketCategories';
import Span from './components/atoms/Span/Span.js';

function App() {
  return (
    <StyledAppContainer>
      <IconsCollection />
      <Span fontSize="titleApp" weight="title" color="white" title>WALLET APP</Span>
      <PocketCategories />
    </StyledAppContainer>
  );
}

export default App;
