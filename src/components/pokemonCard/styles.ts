import styled, { css } from "styled-components";
export const ContainerThub = styled.div`
  background-color: #eee;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  margin: 10px;
  padding: 20px;
  text-align: center;

  ${(props) => {
    console.log("props", props);
    switch (props.itemType) {
      case "fire":
        return css`
          background-color: #fddfdf;
        `;
      case "grass":
        return css`
          background-color: #defde0;
        `;
      case "electric":
        return css`
          background-color: #fcf7de;
        `;
      case "water":
        return css`
          background-color: #def3fd;
        `;
      case "rock":
        return css`
          background-color: #d5d5d4;
        `;
      case "fairy":
        return css`
          background-color: #fceaff;
        `;
      case "poison":
        return css`
          background-color: #98d7a5;
        `;
      case "bug":
        return css`
          background-color: #f8d5a3;
        `;
      case "dragon":
        return css`
          background-color: #97b3e6;
        `;
      case "psychic":
        return css`
          background-color: #eaeda1;
        `;
      case "flying":
        return css`
          background-color: #f5f5f5;
        `;
      case "fighting":
        return css`
          background-color: #e6e0d4;
        `;
      case "normal":
        return css`
          background-color: #f5f5f5;
        `;
      default:
        return css`
          background-color: rgba(255, 255, 255, 0.6);
        `;
    }
  }}
`;
export const ContainerImg = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
`;
export const ImgContainer = styled.img`
  margin-top: 20px;
  max-width: 90%;
`;
export const NamePokemon = styled.h3`
  margin: 15px 0 7px;
  letter-spacing: 1px;
`;

export const NumberPokemon = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  padding: 5px 10px;
`;
export const ContainerInfo = styled.div`
  margin-top: 20px;
`;
