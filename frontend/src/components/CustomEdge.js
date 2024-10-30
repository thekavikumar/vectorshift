import React from 'react';
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from 'reactflow';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <button
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            fontSize: '10px',
            color: 'white',
            pointerEvents: 'all',
            padding: '2px 5px',
            borderRadius: '12px',
            backgroundColor: '#8B5CF6',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
          }}
          className="nodrag nopan edgebutton"
          onClick={onEdgeClick}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'red';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#8B5CF6';
            e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
          }}
        >
          ✕
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
