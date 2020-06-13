import React, { Component } from 'react';
import NavItem from './NavItem';
import './TopBar.css';
import logo from '../../assets/Sixtybees.logo.small.png';

class TopNavBar extends Component {

  onClick = (e) => {

    window.location='/a';

  }

  render() {

    let menus = this.props.menu.map((r, index) => {
      return <NavItem name={this.props.menu[index]} key={index} onClick={this.onClick.bind(this)}/>
    });

    return (
      <div className='TopBar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='TopBarMenu'>{menus}</div>
      </div>
    );
  }
}

export default TopNavBar;