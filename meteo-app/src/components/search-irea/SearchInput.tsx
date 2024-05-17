// SearchInput.tsx
import React, { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value.trim());
  };

  return (
    <input
      type="text"
      value={value}
      className="myInput"
      onChange={onInputChange}
    />
  );
};

export default SearchInput;
