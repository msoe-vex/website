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
  position: fixed;    
  height: 305px;
  width: 60px;    
  z-index: 2;     
  top: 0px;      
  background-color: #2f2f2f; 
  overflow-x: hidden;
  padding-top: 10px;
  opacity: .7;
  border-bottom-right-radius: 20px;
`;

export const StyledNavItem = styled.div`
height: 45px;
width: 60px;
margin-bottom: 0;
div {
  font-size: 2em;
  color: ${(props) => props.selected ? "white" : "gray"};
  :hover {
    opacity: 0.7;
    text-decoration: none;
    border: none;
  }  
}
`;

export const AboutSectionContainer = styled.section`
  min-height: 32vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  scroll-behavior: smooth;
  position: 'relative';
  background-color: #222222;
  background: ${(props) => props.theme[props.background || 'background']};
  & h1 {
    font-size: 2em;
  }
  & span[role='img'] {
    font-size: 4em;
  }
`;

export const ReducedSectionContainer = styled.section`
  min-height: 80vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  scroll-behavior: smooth;
  position: 'relative';
  background-color: #222222;
  background: ${(props) => props.theme[props.background || 'background']};
  & h1 {
    font-size: 2em;
  }
  & span[role='img'] {
    font-size: 4em;
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
  background-color: #222222;
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
