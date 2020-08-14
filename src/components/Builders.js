import styled from 'styled-components';

export const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: table;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  width: 150px;
  padding: 10px 10px;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  color: white;
  border-top: 5px solid
    ${(props) => (props.selected ? null : 'transparent')};
`;

export const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 2;      /* Stay on top of everything */
  top: 0px;      /* Stay at the top */
  background-color: #2f2f2f; /* Gray */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

export const StyledNavItem = styled.div`
height: 70px;
width: 75px; /* width must be same size as NavBar to center */
text-align: center; /* Aligns <a> inside of NavIcon div */
margin-bottom: 0;   /* Puts space between NavItems */
div {
  font-size: 2.7em;
  color: ${(props) => props.selected ? "white" : "gray"};
  :hover {
    opacity: 0.7;
    text-decoration: none; /* Gets rid of underlining of icons */
    border: none;
  }  
}
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  scroll-behavior: smooth;
  position: 'relative';
  background-color: gray;
  background: ${(props) => props.theme[props.background || 'background']};
  & h1 {
    font-size: 2em;
  }
  & span[role='img'] {
    font-size: 4em;
  }
`;

export const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: space-between;
  align-items: baseline;
  width: calc(100% - 20px);
  margin: 10px;
`;
