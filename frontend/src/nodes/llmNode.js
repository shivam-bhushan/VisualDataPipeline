import React, { useState } from 'react';
import { BaseNode } from '../node';


export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'gpt-3.5-turbo');
  const [temperature, setTemperature] = useState(data?.temperature || 0.7);

  return (
    <BaseNode
      id={id}
      data={{ label: 'LLM' }}
      inputs={['system', 'prompt']}
      outputs={['response']}
      fields={[
        {
          type: 'dropdown',
          label: 'Model',
          value: model,
          onChange: setModel,
          options: [
            { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
            { value: 'gpt-4', label: 'GPT-4' },
            { value: 'text-davinci-003', label: 'Davinci' }
          ]
        },
        {
          type: 'text',
          label: 'Temperature',
          value: temperature,
          onChange: (value) => setTemperature(parseFloat(value))
        }
      ]}
    />
  );
}