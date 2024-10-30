import { DraggableNode } from './draggableNode';
import {
  MessageSquare,
  Text,
  Calculator,
  Filter,
  Calendar,
  Link,
  ToggleLeft,
  ChevronsLeftRightEllipsis,
  FileOutput,
} from 'lucide-react';

export const PipelineToolbar = () => {
  return (
    <div className="flex gap-2 p-3 border-b border-[#8B5CF6] shadow">
      <DraggableNode
        type="customInput"
        label="Input"
        icon={ChevronsLeftRightEllipsis}
      />
      <DraggableNode type="llm" label="LLM" icon={MessageSquare} />
      <DraggableNode type="customOutput" label="Output" icon={FileOutput} />
      <DraggableNode type="text" label="Text" icon={Text} />
      <DraggableNode type="math" label="Math" icon={Calculator} />
      <DraggableNode type="filter" label="Filter" icon={Filter} />
      <DraggableNode type="date" label="Date" icon={Calendar} />
      <DraggableNode type="concat" label="Concat" icon={Link} />
      <DraggableNode type="toggle" label="Toggle" icon={ToggleLeft} />
    </div>
  );
};
