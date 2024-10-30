// MathNode.js
import { Position } from 'reactflow';
import { useState } from 'react';
import BaseNode from './BaseNode';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import { Calculator } from 'lucide-react';

export const MathNode = ({ id, data }) => {
  const [operand1, setOperand1] = useState(data?.operand1 || 0);
  const [operand2, setOperand2] = useState(data?.operand2 || 0);
  const [operation, setOperation] = useState(data?.operation || 'Add');

  const handleOperandChange = (field) => (e) => {
    const value = parseFloat(e.target.value) || 0;
    if (field === 'operand1') setOperand1(value);
    if (field === 'operand2') setOperand2(value);
  };

  const handleOperationChange = (e) => setOperation(e.target.value);

  const calculateResult = () => {
    switch (operation) {
      case 'Add':
        return operand1 + operand2;
      case 'Subtract':
        return operand1 - operand2;
      default:
        return 0;
    }
  };

  const content = () => (
    <>
      <InputField
        label="Operand 1:"
        type="number"
        value={operand1}
        onChange={handleOperandChange('operand1')}
      />
      <InputField
        label="Operand 2:"
        type="number"
        value={operand2}
        onChange={handleOperandChange('operand2')}
      />
      <SelectField
        label="Operation:"
        value={operation}
        onChange={handleOperationChange}
        options={[
          { value: 'Add', label: 'Add' },
          { value: 'Subtract', label: 'Subtract' },
        ]}
      />
      <div>Result: {calculateResult()}</div>
    </>
  );

  return (
    <BaseNode
      id={id}
      icon={Calculator}
      data={{ operand1, operand2, operation }}
      label="Math"
      content={content}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-result` },
      ]}
    />
  );
};
