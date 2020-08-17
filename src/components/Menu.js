import React, {useState} from 'react';
import { Menu, Item } from './Builders';
import { SectionLink } from 'react-scroll-section';
import '../style/Menu.scss';
import DrawerToggle from './DrawerToggle';
import MobileMenu from './MobileMenu';

const CONFIRM_KEYS = [13, 32];

const A11yItem = (props) => (
  <Item
    onKeyDown={(e) => {
      if (CONFIRM_KEYS.includes(e.keyCode)) {
        e.preventDefault();
        props.onClick();
      }
    }}
    tabIndex="1"
    {...props}
  />
);

const MenuSection = ({ section, children }) => (
  <SectionLink section={section}>
    {(link) => (
      <A11yItem onClick={link.onClick} selected={link.isSelected}>
        {children}
      </A11yItem>
    )}
  </SectionLink>
);

export const StaticMenu = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
      setSideDrawerIsVisible(false);
  }

  const sideDrawerOpenHandler = () => {
      setSideDrawerIsVisible(!sideDrawerIsVisible);
  }

  return (
  <div>
    <DrawerToggle clicked={sideDrawerOpenHandler} visible={!sideDrawerIsVisible}/>
    <div className="Navbar">
      <Menu>
        <MenuSection section="home">HOME</MenuSection>
        <MenuSection section="about">ABOUT</MenuSection>
        <MenuSection section="history">HISTORY</MenuSection>
        <MenuSection section="contact">CONTACT</MenuSection>
      </Menu>
    </div>
    <div className="SideNav">
    <MobileMenu open={sideDrawerIsVisible}
            closed={sideDrawerClosedHandler}/>
    </div>
  </div>
  );
};