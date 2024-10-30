// DateNode.js
import { Position } from 'reactflow';
import { useState } from 'react';
import BaseNode from './BaseNode';
import InputField from '../components/InputField';
import { Calendar } from 'lucide-react';

export const DateNode = ({ id, data }) => {
  const [offset, setOffset] = useState(data?.offset || 0);

  const handleOffsetChange = (e) =>
    setOffset(parseInt(e.target.value, 10) || 0);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + offset);

  const content = () => (
    <>
      <InputField
        label="Offset (days):"
        type="number"
        value={offset}
        onChange={handleOffsetChange}
      />
      <div>Date: {currentDate.toDateString()}</div>
    </>
  );

  return (
    <BaseNode
      id={id}
      icon={Calendar}
      data={{ offset }}
      label="Date"
      content={content}
      handles={[{ type: 'source', position: Position.Right, id: `${id}-date` }]}
    />
  );
};
