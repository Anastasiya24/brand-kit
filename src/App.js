import { AppContextProvider } from './Context.js';
import BrandKit from 'pages/BrandKit';

function App() {
  return (
    <AppContextProvider>
      <BrandKit />
    </AppContextProvider>
  );
}

export default App;
