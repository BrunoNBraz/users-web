import styled from "styled-components";

export const CardMain = styled.div`
  background-color: #111;
  width: 200px;
  height: 250px;
  border: 1px solid #f7b718;
  border-radius: 3px;
  justify-content: center;
  display: grid;
  padding: 12px;
  transition: all .35s ease;
  cursor: pointer;
  margin: 28px;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 10px 12px 0 rgb(247 183 24 / 20%);
  }
`
