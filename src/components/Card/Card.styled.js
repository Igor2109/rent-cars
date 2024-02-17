import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
  .title {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    height: 24px;
    margin-bottom: 8px;
  }
  .options {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .model {
    color: rgb(52, 112, 255);
  }
  .container {
  }
  .image {
    border-radius: 12px;
    margin-bottom: 14px;
    width: 274px;
    height: 268px;
    object-fit: cover;
  }
  .learnBtn {
    color: white;
    background-color: rgb(52, 112, 255);
    border-radius: 12px;
    border: none;
    width: 100%;
    height: 44px;
    transition: all 0.6s;
  }
  .learnBtn:hover {
    background-color: rgb(11, 68, 205);
  }
  .imgWrapper {
    position: relative;
  }
  .heart {
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
