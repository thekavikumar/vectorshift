// Custom Select Field Component
const SelectField = ({ label, value, onChange, options }) => {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <select
          value={value}
          onChange={onChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectField;
