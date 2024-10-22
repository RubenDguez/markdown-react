import Markdown from 'react-markdown';
import rawMarkdown from '../../markdown/readme.md?url';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Highlighted() {
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
      <Markdown
        children={markdown}
        components={{
          code(props) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className ?? '');
            return match ? (
              <SyntaxHighlighter {...rest} PreTag="div" children={String(children).replace(/\n$/, '')} language={match[1]} style={dark} />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    );
  };
