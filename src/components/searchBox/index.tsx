import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className="flex items-center gap-2 bg-main-100 dark:bg-main-900 py-2 px-4 rounded shadow min-w-[40%]">
      <FaSearch className="text-main-800 dark:text-main-200" />
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
