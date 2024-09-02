import React, { useState, useEffect } from 'react';
import { BaseNode } from '../node';
import { useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();


  useEffect(() => {
    const extractedVars = currText.match(/\{\{([^}]+)\}\}/g) || [];
    setVariables(extractedVars.map(v => v.replace(/\{\{|\}\}/g, '').trim()));
  }, [currText]);

  const handleUpdate = (id) => {
    updateNodeInternals(id);
  }

  return (

    <BaseNode
      id={id}
      data={{ label: 'Text' }}
      inputs={variables}
      outputs={['output']}
      fields={[
        {
          type: 'textarea',
          label: 'Text',
          value: currText,
          onChange: setCurrText,
          rows: 4
        }
      ]}
      onUpdate={handleUpdate}
    />

  );
};
