import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

interface SearchInputProps {
  defaultValue: string | null;
}

const SearchInput = ({ defaultValue }: SearchInputProps) => {
  const router = useRouter();
  const [inputValue, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    if (inputValue) return router.push(`/?q=${inputValue}`);
    if (!inputValue) return router.push("/");
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <div className="search-input">
      <input
        id="inputId"
        type="text"
        placeholder="Search For Recipes..."
        value={inputValue ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default SearchInput;
