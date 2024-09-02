import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from '../node';


export const ExecuteNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{code}}');
    const [variables, setVariables] = useState([]);

    useEffect(() => {
        const extractedVars = currText.match(/\{\{([^}]+)\}\}/g) || [];
        setVariables(extractedVars.map(v => v.replace(/\{\{|\}\}/g, '').trim()));
    }, [currText]);

    return (
        <div style={{ width: 'auto', minWidth: 200, minHeight: 80 }}>
            <BaseNode
                id={id}
                data={{ label: 'Execute Code' }}
                outputs={['output']}
                fields={[
                    {
                        type: 'textarea',
                        label: 'Code',
                        value: currText,
                        onChange: setCurrText,
                        rows: 4
                    }
                ]}
            />
            {variables.map((variable, index) => (
                <Handle
                    key={variable}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${variable}`}
                    style={{ top: `${((index + 1) * 100) / (variables.length + 1)}%` }}
                />
            ))}
        </div>
    );
}