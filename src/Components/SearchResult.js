import React from 'react';
import './SearchResult.css';

const SearchResult = (props) => {
    
  return (
      <tr>
        <td>{props.BookName}</td>
        <td>{props.Author}</td>
      </tr>
  )
}

export default SearchResult;