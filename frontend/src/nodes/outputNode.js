import React, { useState } from 'react';
import { BaseNode } from '../node';


export const OutputNode = ({ id, data }) => {
  const [outputName, setOutputName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [fileType, setFileType] = useState(data.fileType || 'Text');

  return (
    <BaseNode
      id={id}
      data={{ label: 'Output' }}
      inputs={['value']}
      fields={[
        {
          type: 'text',
          label: 'Name',
          value: outputName,
          onChange: setOutputName
        },
        {
          type: 'dropdown',
          label: 'File Type',
          value: fileType,
          onChange: setFileType,
          options: [
            { value: 'Text', label: 'Text' },
            { value: 'Image', label: 'Image' },
            { value: 'Audio', label: 'Audio' },
            { value: 'Video', label: 'Video' }
          ]
        }
      ]}
    />
  );
}