interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <div
      className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 transition-colors duration-200 ${
        checked
          ? "border-purple-500 bg-purple-500"
          : "border-gray-300 hover:border-purple-400"
      } `}
      onClick={onChange}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
}
