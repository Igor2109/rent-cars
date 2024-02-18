import { StyledButton } from "./ButtonSearch.styled";

const ButtonSearch = ({ onBtnClick, children }) => {
  return (
    <StyledButton
      onClick={() => {
        onBtnClick();
      }}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonSearch;
