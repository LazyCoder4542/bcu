import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-3">
      <div
        className={`bg-[url('check.svg')] bg-[length:80%] bg-no-repeat bg-[70%_50%]  h-6 w-6 cursor-pointer rounded-md text-blue-600 ${checked ? "bg-primary" : "border border-[#1E1E1E]"}`}
        onClick={() => {onChange()}}
      ></div>
      <span className="text-gray-700">{label}</span>
    </div>
  );
};

export default Checkbox;