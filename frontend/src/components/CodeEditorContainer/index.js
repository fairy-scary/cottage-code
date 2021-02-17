import React, { useState, useEffect } from 'react';
import '../CodeEditor/CodeEditor.css';
import CodeEditor from '../CodeEditor';

function CodeEditorContainer() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
      const timeout = setTimeout(() => {
        setSrcDoc(`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
      `
    )}, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <div className="editor-container">
        <div>
                <CodeEditor
                language="javascript"
                value={js}
                onChange={setJs}
                />
        </div>
        <div>
                <iframe
                className="editor-iframe"
                src={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="95%"
                height="100%"
                />
        </div>
    </div>
  );
}

export default CodeEditorContainer;
