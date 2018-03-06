import React from 'react';
import navigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props)=> {
    return (
<div className={classes.SideDrawer}>
<div className={classes.Logo}>
    <Logo />
    </div>
    <nav>
    <NavigationItems />
    </nav>
</div>    
    );
}

export default sideDrawer;