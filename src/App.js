import React, { Component } from 'react';
import TopBar from './Components/Navigation/TopBar';
import Drawer from './Components/Navigation/Drawer';
import Content from './Components/Content';
import BookSearch from './Components/BookSearch';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  state = {
    menu: ["What's New", "Search"]
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <TopBar menu={this.state.menu} />
          <Drawer menu={this.state.menu} />
          <Content>
            <Route path="/" component={BookSearch} />
          </Content>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
