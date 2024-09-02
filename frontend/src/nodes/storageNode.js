import React, { useState } from 'react';
import { BaseNode } from '../node';


export const StorageNode = ({ id, data }) => {
    const [outputName, setOutputName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
    const [fileType, setFileType] = useState(data.fileType || 'Text');

    return (
        <BaseNode
            id={id}
            data={{ label: 'Storage' }}
            inputs={['file']}
            fields={[
                {
                    type: 'text',
                    label: 'File Name',
                    value: outputName,
                    onChange: setOutputName
                },
                {
                    type: 'dropdown',
                    label: 'Save As',
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