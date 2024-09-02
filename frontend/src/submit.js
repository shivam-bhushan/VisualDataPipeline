import axios from 'axios';

export const SubmitButton = ({ nodes, edges }) => {

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/pipelines/parse', {
                nodes: nodes.map(node => node.id),
                edges: edges.map(edge => ({ source: edge.source, target: edge.target }))
            });

            const { num_nodes, num_edges, is_dag } = response.data;

            alert(`Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs DAG: ${is_dag}`);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to submit pipeline. Please try again.');
        }
    };

    return (
        <button
            type="submit"
            onClick={handleSubmit}
            className="px-3 py-2 rounded-full border-gray text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        >
            Submit
        </button>
    );
};
