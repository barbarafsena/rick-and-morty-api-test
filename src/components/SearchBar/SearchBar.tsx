import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface SearchBarProps {
    onSearch: (filter: string) => void;
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ( { placeholder, onSearch })  => {

    const [filter, setFilter] = useState<string>("")

   const handleSearch = () => {
    onSearch(filter)
   }

   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(filter);
    }
  };

    return (
        <div className="flex items-center justify- max-w-56 lg:max-w-96 rounded-xl bg-lime-400 p-2 mt-5 min-w-80">
            <input
                type="text"
                value={filter}
                placeholder={placeholder}
                className="bg-transparent w-80 focus:outline-none placeholder-gray-700 pl-2"
                onChange={(e) => setFilter(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}

export default SearchBar;