import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavCarsIds } from "../../redux/carSlice.selector";
import { fetchCars } from "../../redux/carSlice";
import Card from "../../components/Card/Card";
import { CatalogWrapper } from "../CatalogPage/CatalogPage.styled";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favCardsIds = useSelector(selectFavCarsIds);

  useEffect(() => {
    dispatch(fetchCars(1));
  }, [dispatch]);

  const filteredCars = cars?.filter((car) => {
    return favCardsIds.includes(car.id);
  });
  return (
    <div>
      <CatalogWrapper>
        {filteredCars?.map((car) => {
          return <Card key={car.id} {...car} />;
        })}
      </CatalogWrapper>
    </div>
  );
};

export default FavoritePage;
