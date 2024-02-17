import React from "react";
import { StyledModalButton } from "./ModalButtonRentalCar.styled";

const ModalButtonRentalCar = () => {
  return (
    <StyledModalButton>
      <button className={"open-modal-btn"} onClick={() => true}>
        Rental car
      </button>
    </StyledModalButton>
  );
};

export default ModalButtonRentalCar;
