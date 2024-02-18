import React from "react";
import { StyledCarDetail } from "./Details.styled";

const Details = ({
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
  const [, city, country] = address.split(", ");
  const conditions = rentalConditions.split("\n");
  const options = [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `FuelConsumption: ${fuelConsumption}`,
    `EngineSize: ${engineSize}`,
  ];

  return (
    <StyledCarDetail>
      <div className="container">
        <img src={img} alt={description} />
        <div>
          <p>
            {make} <span>{model}</span>, {year}
          </p>
        </div>
        <div>{options.join(" | ")}</div>
        <p>{description}</p>
        <div>
          <h3>Accessories and functionalities:</h3>
          <p>{accessories.join(" | ")}</p>
        </div>
        <div>
          <h3>Rental Conditions: </h3>
          <p>
            {conditions?.map((item) => (
              <span key={item}>{item}</span>
            ))}
            Mileage: <span>{mileage}</span>
            Price: <span>{rentalPrice}</span>
          </p>
        </div>
      </div>

      <a href="tel:+380730000000">
        <button type="button" className="rentBtn">
          <p>Rental car</p>
        </button>
      </a>
    </StyledCarDetail>
  );
};

export default Details;
