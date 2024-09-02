import React, { useState } from 'react';
import { BaseNode } from '../node';


export const ImageNode = ({ id, data }) => {
    const [operation, setOperation] = useState(data?.operation || 'resize');


    return (
        <BaseNode id={id} data={{ label: 'Image Processing' }} inputs={['image']} outputs={['processed']}
            fields={[
                {
                    type: 'dropdown',
                    label: 'Filter',
                    value: operation,
                    onChange: setOperation,
                    options: [
                        { value: 'Resize', label: 'Resize' },
                        { value: 'Crop', label: 'Crop' },
                        { value: 'Rotate', label: 'Rotate' }
                    ]
                }
            ]}
        />

    );
}