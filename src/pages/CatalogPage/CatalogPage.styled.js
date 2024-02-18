import styled from "styled-components";

export const CatalogWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;

  margin-bottom: 100px;

  .load-btn {
    display: block;
    margin: 0 auto;
    border: none;
    background-color: transparent;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
    color: #3470ff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: #0b44cd;
    }

    &.hidden {
      display: none;
    }
  }
`;
