// import React, { useState, useEffect } from 'react';
// import Opp_obj from '../../opp';
// import Cards from '../Cards/Cards';
// import './Search.css'
// const SearchMovies = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie${Opp_obj.Api_Key}&query=${query}`
//       );

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data.results,"Search response")
//       setSearchResults(data.results);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     if (query) {
//       handleSearch();
//     }
//   }, [query]);

//   return (
//     <div className='index'>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search movies..."
//         className='indexSearch'
//       />
//       <button onClick={handleSearch} className='searchButton'>Search</button>
//       {error && <div>Error: {error}</div>}
      
//       <div className='search'> 
//         {searchResults.map((movie) => (
//                     <Cards movie={movie} key={movie.id}/>
                
//             // console.log(movie,"Movie Map")

//         ))}
//             </div>
//     </div>
//   );
// };

// export default SearchMovies;

import React, { useState, useEffect } from 'react';
import Opp_obj from '../../opp';
import Cards from '../Cards/Cards';
import './Search.css';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie${Opp_obj.Api_Key}&query=${query}&page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.results);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query, pageNumber]); // Include pageNumber in the dependency array.

  const handleNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
    }
  };

  return (
    <div className='index'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className='indexSearch'
      />
      <button onClick={handleSearch} className='searchButton'>Search</button>
      {error && <div>Error: {error}</div>}
      
      <div className='search'>
        {searchResults.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>

      <div className='pagination'>
        <button onClick={handlePrevPage} disabled={pageNumber === 1} className='prev'>Previous</button>
        <span className='page'>Page {pageNumber}</span>
        <button onClick={handleNextPage} className='next' >Next</button>
      </div>
    </div>
  );
};

export default SearchMovies;
