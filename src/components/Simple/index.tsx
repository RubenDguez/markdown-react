import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import rawMarkdown from '../../markdown/readme.md?url';

export default function SimpleMarkdown() {
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
  return <Markdown>{markdown}</Markdown>;
}
