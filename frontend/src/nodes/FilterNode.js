// FilterNode.js
import { Position } from 'reactflow';
import { useState } from 'react';
import BaseNode from './BaseNode';
import InputField from '../components/InputField';
import { Filter } from 'lucide-react';

export const FilterNode = ({ id, data }) => {
  const [array, setArray] = useState(data?.array || []);
  const [condition, setCondition] = useState(data?.condition || '');

  const handleArrayChange = (e) =>
    setArray(e.target.value.split(',').map((item) => item.trim()));
  const handleConditionChange = (e) => setCondition(e.target.value);

  const filteredArray = array.filter((item) => item.includes(condition));

  const content = () => (
    <>
      <InputField
        label="Array (comma-separated):"
        value={array.join(', ')}
        onChange={handleArrayChange}
      />
      <InputField
        label="Condition:"
        value={condition}
        onChange={handleConditionChange}
      />
      <div>Filtered: {filteredArray.join(', ')}</div>
    </>
  );

  return (
    <BaseNode
      id={id}
      icon={Filter}
      data={{ array, condition }}
      label="Filter"
      content={content}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-filtered` },
      ]}
    />
  );
};
