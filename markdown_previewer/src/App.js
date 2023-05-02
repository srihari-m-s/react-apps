import React, {useState} from 'react';
import './App.css';
import { marked } from 'marked'


const HOLDER = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

### This is also a sub sub-heading

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;


function App() {

  marked.setOptions({gfm: true,
    breaks: true});

  const [text,setText] = useState(HOLDER);
  const [html, setHtml] = useState((marked.parse(HOLDER,)));


  const handleMark = (e) => {
    setText(e.target.value);
    let convertedText = marked.parse(e.target.value);
    setHtml(convertedText);
  }

  return (
    <div className="App">
      <div className='editor-cont'>
        <textarea id="editor" placeholder={HOLDER} value={text} onChange={handleMark}>
        </textarea>
      </div>

      <div className='preview-cont'>
        <p id="preview" dangerouslySetInnerHTML={{__html:html}}>

        </p>
      </div>
    </div>
  );
}

export default App;