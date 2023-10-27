import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className="flex items-center gap-2 bg-lightElement dark:bg-darkElement py-2 px-4 rounded shadow min-w-[40%]">
      <FaSearch className="text-lightInput" />
      <input
        autoFocus
        className="outline-0 bg-transparent grow"
        placeholder="Search for tasks..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
