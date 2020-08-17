import React from 'react';
import '../style/DrawerToggle.scss';

const drawerToggle = (props) => {
    const toggler = props.visible ? (
        <div onClick={props.clicked} className={"DrawerToggle"}>
            <div></div>
            <div></div>
            <div></div>
        </div>) : null;
    return toggler;
};

export default drawerToggle;