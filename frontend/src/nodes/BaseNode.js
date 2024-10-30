// BaseNode.js
import React from 'react';
import { Handle } from 'reactflow';
import { useStore } from '../store';

// BaseNode component
const BaseNode = ({ id, label, content, handles, data, icon: Icon }) => {
  const { connectingNodeId, deleteNode } = useStore();

  const isConnecting = connectingNodeId === id; // Check if this node is being connected

  const handleDelete = () => {
    deleteNode(id); // Call delete function from store
  };

  return (
    <div
      id={id}
      className={`w-52 p-4 border-2 rounded-lg bg-white shadow-md flex flex-col relative
        ${
          isConnecting
            ? 'border-green-600 shadow-3xl ring-2 ring-green-400 ring-offset-green-100'
            : 'border-violet-500 shadow-md'
        }
        focus-within:ring-1 focus-within:ring-violet-600 focus-within:ring-offset-1 focus-within:ring-offset-violet-400`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center">
            {Icon && <Icon size={20} color="#8B5CF6" className="mr-2" />}
            <div className="font-bold text-lg text-gray-800">{label}</div>
          </div>
          <button
            style={{
              fontSize: '10px',
              color: 'black',
              pointerEvents: 'all',
              padding: '2px 5px',
              borderRadius: '12px',
              border: '2px solid #8B5CF6',
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
            }}
            className="nodrag nopan edgebutton"
            onClick={handleDelete}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#8B5CF6';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              e.target.style.color = '#fff';
              e.target.style.shadow = '0 0 4px rgba(139, 92, 246, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
              e.target.style.color = 'black';
              e.target.style.shadow = '0 0 4px rgba(139,  92, 246, 0.6)';
            }}
          >
            ✕
          </button>
        </div>
      </div>
      <div className="flex-grow">{content({ data })}</div>
      <div className="flex justify-between">
        {handles.map((handle) => (
          <div key={handle.id} className="flex items-center">
            <Handle
              type={handle.type}
              position={handle.position}
              id={handle.id}
              style={{
                backgroundColor: '#8B5CF6',
                borderRadius: '50%',
                border: '4px solid white',
                width: '15px',
                height: '15px',
                right: handle.type === 'source' ? '-6px' : 'auto',
                left: handle.type === 'target' ? '-7px' : 'auto',
                boxShadow: '0 0 4px rgba(139, 92, 246, 0.6)',
                ...handle.style,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseNode;
