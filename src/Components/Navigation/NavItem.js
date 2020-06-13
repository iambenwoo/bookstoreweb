import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
    return <div className='NavItem' key={props.index} onClick={props.onClick}>{props.name}</div>
}

export default NavItem;