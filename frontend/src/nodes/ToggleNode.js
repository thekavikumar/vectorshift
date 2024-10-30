// ToggleNode.js
import { Position } from 'reactflow';
import { useState } from 'react';
import BaseNode from './BaseNode';
import { ToggleLeft } from 'lucide-react';

export const ToggleNode = ({ id, data }) => {
  const [state, setState] = useState(data?.state || 'OFF');

  const toggleState = () =>
    setState((prevState) => (prevState === 'OFF' ? 'ON' : 'OFF'));

  const content = () => (
    <button
      onClick={toggleState}
      style={{
        padding: '5px 10px',
        backgroundColor: state === 'ON' ? 'green' : 'red',
        borderRadius: 5,
        color: 'white',
      }}
    >
      {state}
    </button>
  );

  return (
    <BaseNode
      id={id}
      data={{ state }}
      icon={ToggleLeft}
      label="Toggle"
      content={content}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-state` },
      ]}
    />
  );
};
