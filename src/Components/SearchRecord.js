import React from 'react';

const SearchRecord = (props) => {

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.record.name}</td>
      <td>{props.record.author}</td>
      <td>
        <input 
          type="checkbox" 
          name="chkBoxRecord" 
          id={props.index} 
          onChange={props.onChange} 
          checked={props.checked} />
        </td>
    </tr>
  )
} 

export default SearchRecord;