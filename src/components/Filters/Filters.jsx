import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setFilterCarBrand } from "../../redux/filterSlice";

const carBrands = [
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
  { value: "Land", label: "Land" },
];

const Filters = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilterCarBrand(selectedOption.value));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={carBrands}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filters;
