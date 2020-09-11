import React from 'react';
import { StyledSideNav, StyledNavItem } from './Builders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHome, faEnvelope, faAngleLeft, faBullhorn, faRobot } from '@fortawesome/free-solid-svg-icons';
import { SectionLink } from 'react-scroll-section';
import '../style/MobileMenu.scss';

const CONFIRM_KEYS = [13, 32];

const MobileA11yItem = (props) => (
    <StyledNavItem
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
  
  const MobileMenuSection = ({ section, children }) => (
    <SectionLink section={section}>
      {(link) => (
        <MobileA11yItem onClick={link.onClick} selected={link.isSelected}>
          <div>
            {children}
          </div>
        </MobileA11yItem>
      )}
    </SectionLink>
  );

const mobileMenu = props => {
    let attachedClasses = ["MobileNavbar", "Close"];
    if (props.open) {
        attachedClasses = ["MobileNavbar", "Open"];
    }

    return (
    <div>
      <StyledSideNav className={attachedClasses.join(' ')}>
        <div className="CloseNav" onClick={props.closed}><FontAwesomeIcon icon={faAngleLeft} /></div>
        <MobileMenuSection section="home"><FontAwesomeIcon icon={faHome} /></MobileMenuSection>
        <MobileMenuSection section="about"><FontAwesomeIcon icon={faUsers} /></MobileMenuSection>
        <MobileMenuSection section="programs"><FontAwesomeIcon icon={faBullhorn} /></MobileMenuSection>
        <MobileMenuSection section="vexu"><FontAwesomeIcon icon={faRobot} /></MobileMenuSection>
        <MobileMenuSection section="contact"><FontAwesomeIcon icon={faEnvelope} /></MobileMenuSection>
      </StyledSideNav>
    </div>
    );
};

export default mobileMenu;