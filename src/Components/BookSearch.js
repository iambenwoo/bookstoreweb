import React, { Component } from 'react';
import './BookSearch.css';
import SearchResults from './SearchResults';
import Cart from './Cart';
import axios from 'axios';

class BookSearch extends Component {

  state = {
    inputBookName: "",
    inputAuthor: "",
    sBookName: "",
    sAuthor: "",
    searchResults: [],
    selectAll: false,
    selectItems: [],
    cartItems: []
  }

  constructor(props) {
    super(props);
    // create a ref to search input box and search button
    this.refBtnSearch = React.createRef();
    this.refInputBookName = React.createRef();
    this.refInputAuthor = React.createRef();
  }

  // update the input value to state
  onChangeInputBookName = (e) => {
    this.setState({
      sBookName: "",
      inputBookName: e.target.value
    });
  }

  // update the input value to state
  onChangeInputAuthor = (e) => {
    this.setState({
      sAuthor: "",
      inputAuthor: e.target.value
    });
  }

  // When Search Button is clicked
  onClickBtnSearch = (e) => {

    axios.get('http://localhost:8090/book/search').then(response => {
      this.setState({
        searchResults: response.data
      });
    });

    this.updateSearchCriteria();

    let l = this.state.searchResults.length;
    let tmp = [];
    for (var i = 0; i < l; i++) {
      tmp.push(false);
    }

    this.setState({
      selectAll: false,
      selectItems: tmp
    });

  }

  // When Reset Button is clicked
  onClickBtnReset = (e) => {
    this.setState({
      inputBookName: "",
      inputAuthor: "",
      sBookName: "",
      sAuthor: "",
      searchResults: [],
      cartItems: [],
      selectItems: []
    })
    this.refInputBookName.current.value = "";
    this.refInputAuthor.current.value = "";
    this.refInputBookName.current.focus();
  }

  onKeyPressInputBookName = (e) => {
    if (e.key === 'Enter') {
      this.updateSearchCriteria();
    }
  }

  onKeyPressInputAuthor = (e) => {
    if (e.key === 'Enter') {
      this.updateSearchCriteria();
    }
  }

  updateSearchCriteria = () => {
    this.setState({
      sBookName: this.state.inputBookName,
      sAuthor: this.state.inputAuthor,
      searchResults: [],
      selectAll: false,
      selectItems: []
    });
  }

  // When Select All CheckBox is clicked
  onChangeChkBoxSelectAll = (e) => {

    if (e.target.checked === true) {
      let l = this.state.searchResults.length;
      let tmp = [];
      for (var i = 0; i < l; i++) {
        tmp.push(true);
      }
      this.setState({
        selectAll: true,
        selectItems: tmp
      })
    } else {
      this.resetCheckBox();
    }
  }

  // When Selet Item CheckBox is clicked
  onChangeChkBoxSelectItem = (e) => {

    let i = e.target.id;
    let j = [...this.state.selectItems];
    j[i] = !j[i];

    this.setState({
      selectAll: false,
      selectItems: j
    })
  }

  onClickBtnAddToCart = (e) => {
    this.setState({
      cartItems: [...this.state.selectItems]
    });
  }

  // Reset All CheckBox to Not Selected
  resetCheckBox = () => {

    let tmp = [this.state.searchResults.length];
    for (var i = 0; i < tmp.length; i++) {
      tmp[i] = false;
    }

    this.setState({
      selectAll: false,
      selectItems: tmp
    });
  }


  render() {

    return (
      <React.Fragment >
        <div className='container'>
          <h1 className='item'>Book Search</h1>
          <table className='item'>
            <tbody>
              <tr>
                <td className="label">Name:</td>
                <td>
                  <input autoFocus
                    ref={this.refInputBookName}
                    onChange={this.onChangeInputBookName.bind(this)} // update input field to status
                    onKeyPress={this.onKeyPressInputBookName.bind(this)} // detect when click enter
                    name='inputBookName' size='50' >
                  </input>
                </td>
              </tr>
              <tr>
                <td className="label">Author:</td>
                <td>
                  <input
                    ref={this.refInputAuthor}
                    onChange={this.onChangeInputAuthor.bind(this)} // update input field to status  
                    onKeyPress={this.onKeyPressInputAuthor.bind(this)} // detect when click enter
                    name='inputAuthor' size='50' >
                  </input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='item'>
            <button
              ref={this.refBtnSearch}
              onClick={this.onClickBtnSearch.bind(this)}
              name="btnSearch" >Search</button>
            <button
              onClick={this.onClickBtnReset.bind(this)}
              name="btnReset">Reset</button>
          </div>
          <SearchResults
            searchResults={this.state.searchResults}
            selectItems={this.state.selectItems}
            onChangeChkBoxSelectItem={this.onChangeChkBoxSelectItem}
            selectAll={this.state.selectAll}
            onChangeChkBoxSelectAll={this.onChangeChkBoxSelectAll}
            onClickBtnAddToCart={this.onClickBtnAddToCart} />
          <Cart
            searchResults={this.state.searchResults}
            cartItems={this.state.cartItems} />
        </div>
      </React.Fragment >
    );
  }
}

export default BookSearch;