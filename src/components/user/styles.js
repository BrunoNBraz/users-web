import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 50px;
  margin-top: 10px;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  font-size: 2em;
  background-color: ${props => props.active ? '#0c0c0c' : '#242424'};
  border: ${props => props.active ? '1px solid #f7b718' : ''};
  color: #fff;
  cursor: pointer;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`

export const Number = styled.p`
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
`
