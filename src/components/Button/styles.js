import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: linear-gradient(90deg, #6c757d, #495057);
  border: none;
  border-radius: 12px;
  height: 72px;       /* altura fixa */
  width: 80%;        /* sempre ocupa 80% do espaço disponível */
  margin: 20px 0;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #495057, #6c757d);
    transform: translateY(-2px);
    cursor: pointer;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;
