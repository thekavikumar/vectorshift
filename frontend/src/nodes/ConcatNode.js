// ConcatNode.js
import { Position } from 'reactflow';
import { useState } from 'react';
import BaseNode from './BaseNode';
import InputField from '../components/InputField';
import { Link } from 'lucide-react';

export const ConcatNode = ({ id, data }) => {
  const [str1, setStr1] = useState(data?.str1 || '');
  const [str2, setStr2] = useState(data?.str2 || '');

  const handleStrChange = (field) => (e) => {
    if (field === 'str1') setStr1(e.target.value);
    if (field === 'str2') setStr2(e.target.value);
  };

  const content = () => (
    <>
      <InputField
        label="String 1:"
        value={str1}
        onChange={handleStrChange('str1')}
      />
      <InputField
        label="String 2:"
        value={str2}
        onChange={handleStrChange('str2')}
      />
      <div>Concatenated: {str1 + str2}</div>
    </>
  );

  return (
    <BaseNode
      id={id}
      data={{ str1, str2 }}
      label="Concat"
      icon={Link}
      content={content}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-concat` },
      ]}
    />
  );
};
