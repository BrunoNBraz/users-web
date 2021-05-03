import styled from "styled-components";

export const SearchBox = styled.div`
  height: 42px;
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-end;
`

export const Search = styled.input`
  height: 100%;
  border: none;
  background-color: rgb(42, 42, 42);
  color: white;
  padding: 0 20px;
  font-size: 15px;
  width: 300px;
  
  &:focus-visible{
    outline: #f7b718 solid 0.2px;
  }
`

export const SearchButton = styled.button`
  height: 100%;
  width: 65px;
  background-color: #f7b718;
  color: black;
  border: none;
  border-radius: 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #ffb500;
  }
`
