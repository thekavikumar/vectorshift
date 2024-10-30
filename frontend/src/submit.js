import { useStore } from './store';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { CornerDownLeft } from 'lucide-react';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    console.log('Submitting pipeline:', { nodes, edges });

    const loadingToast = toast.loading('Submitting pipeline...');

    try {
      const response = await axios.post(
        'http://localhost:8000/pipelines/parse',
        {
          nodes: nodes,
          edges: edges,
        }
      );

      const { num_nodes, num_edges, is_dag } = response.data;

      toast.dismiss(loadingToast);
      toast.success(
        `Pipeline Details:\n🔹 Nodes: ${num_nodes}\n🔹 Edges: ${num_edges}\n🔹 Is DAG: ${
          is_dag
            ? 'Yes (The pipeline has a clear order without loops)'
            : 'No (The pipeline contains cycles)'
        }`,
        {
          duration: 5000,
          style: {
            background: '#fff',
            color: '#000',
            border: '2px solid #8B5CF6',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '16px',
          },
          iconTheme: {
            primary: '#8B5CF6',
            secondary: '#FFFAEE',
          },
        }
      );
    } catch (error) {
      console.error('Error submitting pipeline:', error);

      toast.dismiss(loadingToast);
      toast.error(
        'Failed to submit pipeline. Check console for more details.',
        {
          style: {
            background: '#FF4D4D', // Error background color
            color: '#FFFFFF',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '16px',
          },
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-center border-t p-4 border-gray-300 shadow-md ">
      <button
        onClick={handleSubmit}
        className="flex items-center gap-2 border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white font-semibold py-2 px-4 rounded shadow transition duration-200"
      >
        <CornerDownLeft size={15} />
        Submit
      </button>
    </div>
  );
};
