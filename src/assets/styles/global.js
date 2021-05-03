import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: ${props => props.justifyContent || "center"};
  flex-wrap: wrap;
  margin: ${props => props.margin || '35px auto'};
  width: ${props => props.width};
  flex: ${props => props.flex};
  border-radius: ${props => props.borderRadius};
`

export const Container = styled.div`
  padding: 2%;
  margin: 0.5% 5%;
  background-color: rgb(33, 33, 33);
`

export const ProfilePicture = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  display: block;
  box-shadow: 0 0 .0625rem rgba(0, 0, 0, .5);
`

export const Username = styled.h1`
  text-align: center;
  color: #fff;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.color || '#f7b718'};
  font-size: ${props => props.fontSize || '4em'};
  overflow-wrap: anywhere;
`

export const Label = styled.label`
  color: ${props => props.color || '#fff'};
  font-size: 2rem;
  padding: ${props => props.padding};
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent || "center"};
  justify-self: ${props => props.justifySelf};
  align-self: ${props => props.alignSelf};
  flex-wrap: wrap;
`

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  animation: fa-spin 2s infinite linear;

  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
