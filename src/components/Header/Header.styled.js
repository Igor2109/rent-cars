import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 40px;
  background-color: rgb(50, 32, 19);
  .header-list {
    display: flex;
    justify-content: center;
  }

  .header {
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 15px;
    font-size: 18px;
    text-decoration: none;
    margin-right: 20px;
    border-radius: 10px;
    background-color: blanchedalmond;
    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: black;
      color: white;
      border-radius: 10px;
    }

    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }

    &:active {
      box-shadow: none;
    }
    &:disabled {
      background-color: grey;
      cursor: not-allowed;
    }
  }
`;
