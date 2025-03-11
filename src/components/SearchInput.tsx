import { useState } from 'react';

interface SearchInputProps {
  onReset: () => void;
  onChange: (value: string) => void;
}

export default function SearchInput({ onReset, onChange }: SearchInputProps) {
  const [inputValue, setInputValue] = useState('');

  const onResetHandler = () => {
    setInputValue('');
    onReset();
  };

  // TODO: add debounce to prevent unnecessary re-renders
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="flex relative w-full min-w-md -my-2 bg-[rgba(0,0,0,.25)] py-2 px-4 pr-0 rounded-sm">
      <input
        type="text"
        placeholder="search"
        onChange={onChangeHandler}
        value={inputValue}
        className="flex-1"
      />
      <button onClick={onResetHandler} className="px-2">
        X
      </button>
    </div>
  );
}
