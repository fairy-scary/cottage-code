import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/gruvbox-dark.css';

import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';


const CodeEditor = (props) => {

  const {
      language,
      value,
      onChange
  } = props
  
  function handleChange(editor, data, value) {
      onChange(value);
  }

  return (
    <div className="editor-container">
      <ControlledEditor
        onBeforeChange={handleChange}
        value= {value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'gruvbox-dark',
          autoCloseTags: true,
          autoCloseBrackets: true, 
        }}
      />
    </div>
  )
}


export default CodeEditor
