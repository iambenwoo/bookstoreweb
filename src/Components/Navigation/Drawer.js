import React, { Component } from 'react';
import NavItem from './NavItem';
import './Drawer.css';
import logo from '../../assets/Sixtybees.logo.small.png';
import hamburgermenu from '../../assets/hambuger_icon.png';

class Drawer extends Component {

    state = {
        drawerClosed: true,
        drawerCss: 'Drawer Close'
    }

    onClickHambugerMenu = (e) =>{

        let s = this.state.drawerClosed;

        if(s === true){
            this.setState({
                drawerClosed: false,
                drawerCss: 'Drawer Open'
            })
        }else{
            this.setState({
                drawerClosed: true,
                drawerCss: 'Drawer Close'
            })
        }

    }

    render() {

        let menus = this.props.menu.map((r, index) => {
            return <NavItem name={this.props.menu[index]} key={index} />
        });

        return (
            <React.Fragment>
                <div className='DrawerTopBar' >
                    <img src={hamburgermenu} alt='menu' className='menuicon' onClick={this.onClickHambugerMenu.bind(this)} />
                    <img src={logo} alt='logo' />
                </div>
                <div className={this.state.drawerCss}>
                    {menus}
                </div>
            </React.Fragment>
        );
    }

}

export default Drawer;