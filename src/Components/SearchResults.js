import React from 'react';
import SearchRecord from './SearchRecord';
import './BookSearch.css';

const SearchResults = (props) => {

    if (props.searchResults.length > 0) {

        let searchRecords = props.searchResults.map((r, index) => {
            return <SearchRecord
                key={index}
                index={index}
                record={r}
                checked={props.selectItems[index]}
                onChange={props.onChangeChkBoxSelectItem}
            />
        });

        return <div className='item'>
            <table className="Results">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>
                            <input
                                type='checkbox'
                                name='chkBoxSelectAll'
                                checked={props.selectAll}
                                onChange={props.onChangeChkBoxSelectAll}>
                            </input>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {searchRecords}
                </tbody>
            </table>
            <p><button onClick={props.onClickBtnAddToCart}>Add to cart</button></p>
        </div>

    } else {
        return <p>No records</p>;
    }
}

export default SearchResults;