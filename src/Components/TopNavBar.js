import React, { Component } from 'react';
import './TopNavBar.css';

class TopNavBar extends Component {
  
  state = {
    time: 0
  }

  render() {
    
    return (
      <div className="TopBar">
          <table width="200px">
            <tr>
              <td>Clock</td><td>Login status</td>
            </tr>
          </table>
      </div>
    );
  }
}

export default TopNavBar;