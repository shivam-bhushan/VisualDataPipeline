import { DraggableNode } from './draggableNode';
import { SubmitButton } from './submit';
import { useStore } from './store'; // Assuming store is where your nodes and edges are managed
import { shallow } from 'zustand/shallow';

export const PipelineToolbar = () => {
    const { nodes, edges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges,
    }), shallow);

    return (
        <div className="absolute flex justify-center items-center rounded-xl left-5 right-5 z-10 mt-5">
            <div className=" relative px-2 flex justify-center items-center backdrop-blur-sm bg-opacity-50 border border-white/20 rounded-xl shadow-lg">
                <div className="flex">
                    <span className="mx-5 font-semibold text-xl text-white">VectorShift</span>
                </div>
                <div className="mx-10 my-3 hidden lg:flex flex-1 justify-center">
                    <ul className="flex items-center ">
                        <li><DraggableNode type="customInput" label="Input" /></li>
                        <li><DraggableNode type="llm" label="LLM" /></li>
                        <li><DraggableNode type="customOutput" label="Output" /></li>
                        <li><DraggableNode type="text" label="Text" /></li>
                        <li><DraggableNode type="filter" label="Filter" /></li>
                        <li><DraggableNode type="storage" label="Storage" /></li>
                        <li><DraggableNode type="api" label="API" /></li>
                        <li><DraggableNode type="execute" label="Execute" /></li>
                        <li><DraggableNode type="image" label="Image" /></li>
                    </ul>
                </div>
                <div className="mx-5">
                    <SubmitButton nodes={nodes} edges={edges} />
                </div>
            </div>
        </div>
    );
};
