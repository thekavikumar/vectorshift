// InputNode.js
import { Position } from 'reactflow';
import { useState } from 'react';
import BaseNode from './BaseNode';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import { ChevronsLeftRightEllipsis } from 'lucide-react';

export const InputNode = ({ id, data }) => {
  const [inputName, setInputName] = useState(data?.inputName || id);
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleInputChange = (field) => (e) => {
    if (field === 'inputName') setInputName(e.target.value);
    if (field === 'inputType') setInputType(e.target.value);
  };

  const content = () => (
    <div className="flex flex-col">
      <InputField
        label="Name:"
        value={inputName}
        onChange={handleInputChange('inputName')}
      />
      <SelectField
        label="Type:"
        value={inputType}
        onChange={handleInputChange('inputType')}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' },
        ]}
      />
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={{ inputName, inputType }}
      label="Input"
      content={content}
      icon={ChevronsLeftRightEllipsis}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    />
  );
};
