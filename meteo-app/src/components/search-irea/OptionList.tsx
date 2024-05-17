// OptionList.tsx
import React from "react";
import { optionType } from "./.././../types/index";

interface Props {
  options: optionType[];
  onOptionSelect: (option: optionType) => void;
}

const OptionList: React.FC<Props> = ({ options, onOptionSelect }) => {
  return (
    <ul className="list-map-sugg-1">
      {options.map((option, index) => (
        <li key={option.name + "-" + index}>
          <button
            className="custom-button"
            onClick={() => onOptionSelect(option)}
          >
            {option.name}, {option.country}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
