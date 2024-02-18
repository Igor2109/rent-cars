import React from "react";
import { HomeWrap } from "./HomePage.styled";
import { useNavigate } from "react-router";
import ButtonSearch from "../../components/ButtonSearch/ButtonSearch";

const HomePage = () => {
  const navigate = useNavigate();
  const onViewCarsClick = () => {
    navigate("/catalog");
  };
  return (
    <HomeWrap>
      <div className="main-container">
        <h1 className="hero">Search. Compare. Rent.</h1>
        <h2 className="hero-2">Car rental at the best prices</h2>

        <ButtonSearch onBtnClick={onViewCarsClick}>Searching...</ButtonSearch>
      </div>
    </HomeWrap>
  );
};

export default HomePage;
