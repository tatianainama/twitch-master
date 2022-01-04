import { useState, useEffect, useRef } from 'preact/hooks'
import { search } from '../../api';

import styles from './search.module.css';

const Search = () => {
  const [ searching, setSearching ] = useState(false);
  const [ results, setResults ] = useState(undefined);
  const SearchForm = useRef(null);
  const runSearch = (event) => {
    event.preventDefault();
    setSearching(true);
    const formData = new FormData(SearchForm.current);
    const query = formData.get('search-query');
    search(query)
      .then(({data}) => {
        setResults(data);
      })
      .finally(() => setSearching(false));
  }
    
  console.log(results);
  return (
    <form className={styles.search} onSubmit={runSearch} ref={SearchForm} autoComplete='off'>
      <input
        className={styles.searchInput}
        placeholder='search'
        name='search-query'
      />
      <div className={styles.searchResults}>
        {results && (
          <div className={styles.searchResultsContent}>
            {
              results.length ? (
                <ul>
                  {results.map(({id, display_name, game_name}) => (
                    <li key={id}>
                      {display_name}
                      <span>{game_name}</span>
                    </li>
                  ))}
                </ul>
              ) : <h5>No results available</h5>
            }
          </div>
        )}
      </div>
      <div className={styles.searchOverlay}></div>
    </form>
  )
}

export default Search;
