import { Position, useUpdateNodeInternals } from 'reactflow';
import { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';
import InputField from '../components/InputField';
import { Text } from 'lucide-react';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || id);
  const [variableHandles, setVariableHandles] = useState([]);
  const inputRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  const extractVariables = (text) => {
    // Extract variable patterns like {{input}}
    return text.match(/{{\s*(\w+)\s*}}/g) || [];
  };

  const createHandleID = (variable) => {
    // Ensure unique and valid handle ID format
    return `${id}-${variable.trim().replace(/[{}]/g, '')}-input`;
  };

  const createHandles = (variables) => {
    const totalVars = variables.length;
    const midpoint = Math.floor(totalVars / 2);

    // Generate dynamic handles based on variables
    return variables.map((variable, index) => ({
      data: { label: variable.trim().replace(/[{}]/g, '') }, // Use the variable as the label
      type: 'target',
      position: Position.Left,
      id: createHandleID(variable), // Use the new handle ID function
      style: {
        marginTop: `${(index - midpoint) * 30}px`, // Distribute handles evenly
      },
    }));
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    // Extract variables and create handles dynamically
    const variables = extractVariables(newText);
    console.log(variables);
    setVariableHandles(createHandles(variables));
  };

  // Adjust the input field height dynamically
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [currText]);

  useEffect(() => {
    updateNodeInternals(id); // Ensure React Flow updates the handles properly
  }, [variableHandles, id, updateNodeInternals]);

  const content = () => (
    <InputField
      label="Text:"
      value={currText}
      onChange={handleTextChange}
      ref={inputRef}
      isTextArea={true}
    />
  );

  return (
    <BaseNode
      id={id}
      icon={Text}
      data={{ text: currText }} // Pass the current text as data
      label="Text"
      content={content}
      handles={[
        ...variableHandles, // Add variable handles
        { type: 'source', position: Position.Right, id: `${id}-output` }, // Output handle
      ]}
    />
  );
};
