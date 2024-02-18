import styled from "styled-components";

export const StyledButton = styled.button`
  width: 274px;
  height: 44px;

  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  color: #fff;
  background-color: rgb(92, 34, 6);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(164, 98, 65);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }
`;
