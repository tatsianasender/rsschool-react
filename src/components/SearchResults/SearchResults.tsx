import { Component } from 'react';
import { Person } from '../../types/types';
import styles from './SearchResults.module.css';

interface IProps {
  searchResults: Person[];
}

interface IState {}

class SearchResults extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const { searchResults } = this.props;

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
  }
}

export default SearchResults;
