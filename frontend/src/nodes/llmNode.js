// LLMNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
import { MessageSquare } from 'lucide-react';

export const LLMNode = ({ id, data }) => {
  const content = () => (
    <>
      <div>
        <span>This is a LLM.</span>
      </div>
    </>
  );

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-system`,
      style: { top: '33%' },
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: '66%' },
    },
    { type: 'source', position: Position.Right, id: `${id}-response` },
  ];

  return (
    <BaseNode
      id={id}
      icon={MessageSquare}
      label="LLM"
      content={content}
      handles={handles}
      data={data}
    />
  );
};
