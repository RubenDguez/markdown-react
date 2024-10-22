import Markdown from 'react-markdown'
import rawMarkdown from '../src/markdown/readme.md?url';
import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    async function readFile() {
      try {
        const response = await fetch(rawMarkdown);
        const text = await response.text();

        setMarkdown(text);
      } catch (error) {
        console.error(error);
      }
    }

    readFile();
  }, []);

  return (
    <main>
      <Markdown>{markdown}</Markdown>
    </main>
  )
}

export default App
