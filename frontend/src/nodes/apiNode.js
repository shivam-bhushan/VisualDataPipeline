import React, { useState } from 'react';
import { BaseNode } from '../node';


export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || '');

    return (
        <BaseNode id={id} data={{ label: 'API' }} inputs={['request']} outputs={['response']}>
            <div>
                <input
                    className='mt-1 block w-full px-3 py-2 text-neutral-400 bg-neutral-100 border border-[#e0d6fe]  border-opacity-60 rounded-md shadow-sm focus:outline-none focus:border-violet-200 selection:bg-violet-300 selection:text-neutral-200 sm:text-sm'
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter API URL"
                />
            </div>
        </BaseNode>
    );
}