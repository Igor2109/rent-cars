import React, { useEffect, useState } from "react";
import ModalButtonRentalCar from "../../components/ModalButtonRentalCar/ModalButtonRentalCar";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/carSlice.selector";
import { fetchCars } from "../../redux/carSlice";
import Card from "../../components/Card/Card";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  return (
    <div>
      CatalogPage
      {cars?.map((car) => {
        return <Card key={car.id} {...car} />;
      })}
      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
      <ModalButtonRentalCar />
    </div>
  );
};

export default CatalogPage;
