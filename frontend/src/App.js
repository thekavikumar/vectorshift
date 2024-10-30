import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      <Toaster position="bottom-right" reverseOrder />
    </div>
  );
}

export default App;
