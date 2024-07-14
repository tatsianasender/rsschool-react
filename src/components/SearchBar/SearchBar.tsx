import { FC, useState } from 'react';
import styles from './SearchBar.module.css';

interface IProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchBar: FC<IProps> = ({ searchTerm, onSearch }) => {
  const [term, setTerm] = useState<string>(searchTerm);

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value.trim())}
        placeholder="Enter search term..."
      />
      <button className={styles.btn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
