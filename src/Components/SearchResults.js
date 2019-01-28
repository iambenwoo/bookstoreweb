import React, { Component } from 'react';
import SearchResult from './SearchResult';
import './SearchResults.css';

class SearchResults extends Component {

    render() {

        let results = <div>No records</div>;

        if (this.props.results.length > 0) {
            results = this.props.results.map((r, index) =>
                <SearchResult
                    index={index}
                    BookName={r.BookName}
                    Author={r.Author}
                />
            );
        }

        return (
            <table className="Results">
                <tr><th className="Headers">Book Name</th><th className="Headers">Author</th></tr>
                {results}
            </table>
        );
    }
}

export default SearchResults;