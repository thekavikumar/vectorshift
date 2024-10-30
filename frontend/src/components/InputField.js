import React from 'react';

// Custom Input Field Component
const InputField = React.forwardRef(
  ({ label, value, onChange, type = 'text', isTextArea = false }, ref) => {
    return (
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {isTextArea ? (
            <textarea
              ref={ref} // Set ref here for the textarea
              value={value}
              onChange={onChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 resize-none overflow-hidden text-left"
              rows={1} // Start with one row
              style={{ boxSizing: 'border-box' }} // Include padding in the width
            />
          ) : (
            <input
              ref={ref}
              type={type}
              value={value}
              onChange={onChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          )}
        </label>
      </div>
    );
  }
);

export default InputField;
