import { SiPokemon } from "react-icons/si";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
export const ContainerInput = styled.div`
  display: flex;
  padding: 10px;
  background: #dadada4f;
  border-radius: 10px;
  align-items: center;
`;
export const Input = styled.input`
  width: 100%;
  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  outline: none;
  color: #5c8599;
  margin-right: 5px;
  padding: 0 16px;
  height: 30px;
`;
export const Icone = styled(SiPokemon)`
  -webkit-text-fill-color: transparent;
  color: steelblue;
  font-size: 150px;
`;
