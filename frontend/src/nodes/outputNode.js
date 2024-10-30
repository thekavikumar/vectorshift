// OutputNode.js
import { Position } from 'reactflow';
import { useState } from 'react';
import BaseNode from './BaseNode';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import { FileOutput } from 'lucide-react';

export const OutputNode = ({ id, data }) => {
  const [outputName, setOutputName] = useState(data?.outputName || id);
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleOutputChange = (field) => (e) => {
    if (field === 'outputName') setOutputName(e.target.value);
    if (field === 'outputType') setOutputType(e.target.value);
  };

  const content = () => (
    <>
      <InputField
        label="Name:"
        type="text"
        value={outputName}
        onChange={handleOutputChange('outputName')}
      />

      <SelectField
        label="Type:"
        value={outputType}
        onChange={handleOutputChange('outputType')}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'Image' },
        ]}
      />
    </>
  );

  return (
    <BaseNode
      id={id}
      icon={FileOutput}
      data={{ outputName, outputType }}
      label="Output"
      content={content}
      handles={[{ type: 'target', position: Position.Left, id: `${id}-value` }]}
    />
  );
};
