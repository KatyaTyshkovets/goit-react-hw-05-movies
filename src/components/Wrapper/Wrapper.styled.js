import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  box-shadow: #000000 2px 2px 2px 2px;
  border-radius: 2px 6px 10px 0px;
  background: # 2F4F4F;

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;



export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: silver;
  }
  :hover:not(.active),
  :focus-visible:not(.active){
    color:silver;
  }
`;
