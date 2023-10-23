
import './App.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

const defaultMarkdown = `## This is a sub-heading...
### And here's some other cool stuff:

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

And if you want to get really crazy, even tables:

Wild Hea | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

function App() {

  const [markdownText, setMarkdowntext] = useState(defaultMarkdown);

  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: '#1A1A1A', margin: 'auto', height: '50px' }}>
        <h2 className='text-center' style={{ color: 'snow' }}>Markdown Previewer</h2>
      </div>
      <div className='container-fluid main'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-12 out'>
            <div className='box1'>
              <textarea name='editor' id='editor' value={markdownText} onChange={(e) => setMarkdowntext(e.target.value)}></textarea>
            </div>

          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-12 box2' id='preview'>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
