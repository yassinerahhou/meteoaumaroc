// SearchButton.tsx
import React from "react";

interface Props {
  onClick: () => void;
}

const SearchButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
      onClick={onClick}
    >
      Search
    </button>
  );
};

export default SearchButton;
