import styled from "styled-components";

export const RepositoryBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  background-color: #0c0c0c;
  border-radius: 3px;
  max-width: 280px;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 20px;
`

export const RepositoryItem = styled.div`
  min-width: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 3px;
  border: 1px solid #f7b718;
  text-align: center;
`

export const ItemCaption = styled.div`
  border-right: 1px solid #f7b718;
  padding: 5px;
`
