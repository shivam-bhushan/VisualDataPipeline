// inputNode.js

import { useState } from 'react';
// import { Handle, Position } from 'reactflow';
import { BaseNode } from '../node';
export const InputNode = ({ id, data }) => {
  const [inputName, setInputName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [fileType, setFileType] = useState(data.fileType || 'Text');

  return (
    <BaseNode
      id={id}
      data={{ label: 'Input' }}
      outputs={['value']}
      fields={[
        {
          type: 'text',
          label: 'Name',
          value: inputName,
          onChange: setInputName
        },
        {
          type: 'dropdown',
          label: 'File Type',
          value: fileType,
          onChange: setFileType,
          options: [
            // { value: 'Text', label: 'Text' },
            { value: 'Image', label: 'Image' },
            { value: 'Audio', label: 'Audio' },
            { value: 'Video', label: 'Video' }
          ]
        }
      ]}
    />
  );
}