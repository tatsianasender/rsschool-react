import { ChangeEvent, Component } from 'react';
import styles from './SearchBar.module.css';

interface IProps {
  searchTerm: string;
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

interface IState {}

class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { searchTerm, onSearchInputChange, onSearch } = this.props;

    return (
      <div className={styles.wrapper}>
        <input type="text" value={searchTerm} onChange={onSearchInputChange} placeholder="Enter search term..." />
        <button className={styles.btn} onClick={onSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
