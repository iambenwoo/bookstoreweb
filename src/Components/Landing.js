import React, { Component } from 'react';
import './Landing.css';
import SearchResults from './SearchResults';

class Landing extends Component {

  state = {
    inputBookName: "",
    inputAuthor: "",
    sBookName: "",
    sAuthor: "",
    results: []
  }

  constructor(props) {
    super(props);
    // create a ref to search input box and search button
    this.refBtnSearchBook = React.createRef();
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

  onClickBtnSearchBook = (e) => {
    this.updateSearchCriteria();
    this.setState({
      results: [
        { BookName: "Book 1", Author: "Author 1" },
        { BookName: "Book 2", Author: "Author 2" }
      ]
    });
  }

  onClickBtnResetSearchBook = (e) => {
    this.setState({
      inputBookName: "",
      inputAuthor: "",
      sBookName: "",
      sAuthor: "",
      results: []
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
      sAuthor: this.state.inputAuthor
    })
  }

  render() {

    // Component of Search Criteria
    let cmptSearchCriteria = null;

    cmptSearchCriteria = (
      <div>{this.state.sBookName}</div>
    );

    return (
      <div className="Landing">
        <div>
          <h1>Book Search</h1>
        </div>
        <div className="Content">
          <table>
            <tr>
              <td className="label">Name : </td>
              <td className="content">
                <input autoFocus
                  ref={this.refInputBookName}
                  onChange={this.onChangeInputBookName.bind(this)} // update input field to status
                  onKeyPress={this.onKeyPressInputBookName.bind(this)} // detect when click enter
                  name='inputBookName' size='50' ></input>
              </td>
            </tr>
            <tr>
              <td className="label">Author : </td>
              <td className="content">
                <input
                  ref={this.refInputAuthor}
                  onChange={this.onChangeInputAuthor.bind(this)} // update input field to status  
                  onKeyPress={this.onKeyPressInputAuthor.bind(this)} // detect when click enter
                  name='inputAuthor' size='50' ></input>
              </td>
            </tr>
          </table>
        </div>
        <div className="Content">
          <table>
            <tr>
              <td><button
                ref={this.refBtnSearchBook}
                onClick={this.onClickBtnSearchBook.bind(this)}
                name="btnSearchBook" >Search</button></td>
              <td><button
                onClick={this.onClickBtnResetSearchBook.bind(this)}
                name="btnResetSearchBook">Reset</button></td>
            </tr>
          </table>
        </div>
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default Landing;
