import React, { useState } from "react";
import { StyledCard } from "./Card.styled";
// import { CarDetail, Modal } from "components";
import { ReactComponent as IconHeartNormal } from "../../assets/Icons/heartNormal.svg";
import { ReactComponent as IconHeartActive } from "../../assets/Icons/heartActive.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavCarsIds } from "../../redux/carSlice.selector";
import { toggleFav } from "../../redux/carSlice";

const Card = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const favCarIds = useSelector(selectFavCarsIds);
  const [, city, country] = address.split(", ");
  const options =
    functionalities && functionalities.length > 0
      ? [city, country, rentalCompany, type, model, id, functionalities[0]]
      : [city, country, rentalCompany, type, model, id];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onToggleFav = (carId) => {
    dispatch(toggleFav(carId));
  };

  const isCarInFavourite = favCarIds.includes(id);
  return (
    <StyledCard>
      <div className="container">
        <div className="imgWrapper">
          <button
            onClick={() => onToggleFav(id)}
            type="button"
            className="heart"
          >
            {isCarInFavourite ? <IconHeartActive /> : <IconHeartNormal />}
          </button>
          <img src={img} alt={description} className="image" />
        </div>
        <div className="title">
          <p>
            {make} <span className="model">{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <div className="options">{options.join(" | ")}</div>
      </div>
      <button type="button" className="learnBtn" onClick={toggleModal}>
        <p>Learn more</p>
      </button>
      {/* {showModal && (
        <Modal
          onClose={toggleModal}
          renderContent={(onClose) => (
            <CarDetail
              id={id}
              year={year}
              make={make}
              model={model}
              type={type}
              img={img}
              description={description}
              fuelConsumption={fuelConsumption}
              engineSize={engineSize}
              accessories={accessories}
              functionalities={functionalities}
              rentalPrice={rentalPrice}
              rentalCompany={rentalCompany}
              address={address}
              rentalConditions={rentalConditions}
              mileage={mileage}
              onClose={onClose}
            />
          )}
        />
      )} */}
    </StyledCard>
  );
};

export default Card;
