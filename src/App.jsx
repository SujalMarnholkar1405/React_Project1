
import componentsImg from './assets/components.png'

import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

//import { jsx } from 'react/jsx-runtime';
function App() {
  return (
    <>
      <Header />
      <main>
         <CoreConcepts/>
         <Examples/>
      </main>
    </>
  );
}

export default App;
