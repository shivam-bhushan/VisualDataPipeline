import React from 'react';
import { Handle, Position } from 'reactflow';

// Dev should be able to:
// - decide number of handles
// - decide type of input

export const BaseNode = ({
    id,
    data,
    children,
    inputs = [],
    outputs = [],
    fields = [],
    onUpdate
}) => {

    // Switch - to handle different input types 
    const renderField = (field, index) => {
        switch (field.type) {
            case 'text':
                return (
                    <div key={`field-${index}`} className="mb-2">
                        <label className="block text-sm font-medium text-neutral-500">{field.label}:</label>
                        <input
                            type="text"
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 text-neutral-400 bg-neutral-100 border border-[#e0d6fe]  border-opacity-60 rounded-md shadow-sm focus:outline-none focus:border-violet-200 selection:bg-violet-300 selection:text-neutral-200 sm:text-sm"
                        />
                    </div>
                );

            case 'dropdown':
                return (
                    <div key={`field-${index}`} className="mb-2">
                        <label className="block text-sm font-medium text-neutral-500">{field.label}:</label>
                        <select
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className=" mt-1 block w-full px-3 py-2 bg-neutral-100 border border-[#e0d6fe]  border-opacity-60 rounded-md shadow-sm focus:outline-none focus:border-violet-200 sm:text-sm"
                        >
                            {field.options.map((option, optionIndex) => (
                                <option key={`option-${optionIndex}`} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                );

            case 'textarea':
                return (
                    <div key={`field-${index}`} className="mb-2">
                        <label className="block text-sm font-medium text-neutral-500">{field.label}:</label>
                        <textarea
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            rows={field.rows || 3}
                            className="mt-1 block w-full px-3 py-2 bg-neutral-100 border border-[#e0d6fe]  border-opacity-60 rounded-md shadow-sm focus:outline-none focus:border-violet-200 sm:text-sm"
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-[225px] min-h-[90px] transition-opacity duration-100 ease-in-out delay-300 hover:shadow-custom-shadow ring:border-2 ring:border-violet-300 border-gray rounded-2xl p-[15px] bg-neutral-100"

        >
            {inputs.map((input, index) => (
                <Handle
                    key={`input-${index}`}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${input}`}
                    style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
                />
            ))}

            <div className='w-full flex justify-center pb-2 border-b-2 border-purple-300 border-spacing-1 border-opacity-30'>
                <span className='text-neutral-700 font-medium'>{data.label}</span>
            </div>

            <div className='mt-3'>

                {fields.map(renderField)}
                {children}
            </div>

            {outputs.map((output, index) => (
                <Handle
                    key={`output-${index}`}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${output}`}
                    style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
                />
            ))}

            {onUpdate && (
                <button onClick={() => onUpdate(id)} className=' border border-neutral-300 px-2 py-1 rounded-md hover:bg-violet-400 hover:text-neutral-100 hover:border-2 hover:border-violet-100'>Update</button>
            )}
        </div>
    );
};
