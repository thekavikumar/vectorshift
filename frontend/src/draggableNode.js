export const DraggableNode = ({ type, label, icon: Icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} p-2 cursor-grab flex items-center gap-3 border-2 border-[#9358db] rounded-md 
      bg-[#f3e8ff] hover:bg-[#e9d5ff] 
      transform transition-transform duration-300 ease-in-out hover:scale-105 
      hover:shadow-md`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      {Icon && <Icon size={20} color="#9358db" />}{' '}
      {/* Match icon color with theme */}
      <span style={{ fontSize: '14px', fontWeight: '500' }}>{label}</span>{' '}
      {/* Adjust font size and weight */}
    </div>
  );
};
