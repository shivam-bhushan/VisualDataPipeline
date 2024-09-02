import React, { useState } from 'react';
import { BaseNode } from '../node';

export const FilterNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || '');

    return (
        <BaseNode id={id} data={{ label: 'Filter' }} inputs={['input']} outputs={['true', 'false']}
            fields={[
                {
                    type: 'text',
                    label: 'Condition',
                    value: condition,
                    onChange: setCondition
                },
            ]}
        />
    );
}