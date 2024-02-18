import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/carSlice.selector";
import { fetchCars } from "../../redux/carSlice";
import Card from "../../components/Card/Card";
import { CatalogWrapper } from "./CatalogPage.styled";
import Filters from "../../components/Filters/Filters";
import { selectCarBrand } from "../../redux/filterSlice.selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);
  const carBrand = useSelector(selectCarBrand);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const filteredCars = cars?.filter((car) => {
    if (carBrand) {
      return car.make === carBrand;
    }
    return true;
  });
  return (
    <div>
      <Filters />
      <CatalogWrapper>
        {filteredCars?.map((car) => {
          return <Card key={car.id} {...car} />;
        })}

        <button className="load-btn" type="button" onClick={handleLoadMore}>
          Load more
        </button>
      </CatalogWrapper>
    </div>
  );
};

export default CatalogPage;
