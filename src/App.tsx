import { useState } from 'react';

import Highlighted from './components/Highlighted';
import './styles.css';
import SimpleMarkdown from './components/Simple';

function App() {
  const [isHighlight, setIsHighlight] = useState(true);

  return (
    <div>
      <nav>
        <button onClick={() => setIsHighlight(!isHighlight)}>{isHighlight ? 'Simple' : 'Highlighted'}</button>
      </nav>
      <main>{isHighlight ? <Highlighted /> : <SimpleMarkdown />}</main>
    </div>
  );
}

export default App;
