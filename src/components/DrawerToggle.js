import React from 'react';
import '../style/DrawerToggle.scss';

const drawerToggle = (props) => (
    <div onClick={props.clicked} className={"DrawerToggle"}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;