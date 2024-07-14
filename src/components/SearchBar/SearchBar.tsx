import { FC, ChangeEvent } from 'react';
import styles from './SearchBar.module.css';

interface IProps {
  searchTerm: string;
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: FC<IProps> = ({ searchTerm, onSearchInputChange, onSearch }) => {
  return (
    <div className={styles.wrapper}>
      <input type="text" value={searchTerm} onChange={onSearchInputChange} placeholder="Enter search term..." />
      <button className={styles.btn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
