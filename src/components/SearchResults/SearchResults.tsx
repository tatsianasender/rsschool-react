import { FC } from 'react';
import { Person } from '../../types/types';
import styles from './SearchResults.module.css';

interface IProps {
  searchResults: Person[];
}

const SearchResults: FC<IProps> = ({ searchResults }) => {
  return (
    <div className={styles.wrapper}>
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <div key={index} className={styles.card}>
            <h4>{result.name}</h4>
            <div>
              <strong>height: </strong>
              {result.height}
            </div>
          </div>
        ))
      ) : (
        <h2>Nothing found.</h2>
      )}
    </div>
  );
};

export default SearchResults;
