import React, { useEffect, useState } from "react";
import Cards from "../Card";
import { useSearchParams } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "samsung",
    image: "/path/to/image.jpg",
    description: "This is samsung",
  },
  {
    id: 2,
    title: "iPhone",
    image: "/path/to/image.jpg",
    description: "This is iPhone",
  },
  {
    id: 3,
    title: "ford",
    image: "/path/to/image.jpg",
    description: "This is ford",
  },
  {
    id: 4,
    title: "pego",
    image: "/path/to/image.jpg",
    description: "This is pego",
  },
  {
    id: 5,
    title: "porshe",
    image: "/path/to/image.jpg",
    description: "This is porshe",
  },
  {
    id: 6,
    title: "benz",
    image: "/path/to/image.jpg",
    description: "This is benz",
  },
  {
    id: 7,
    title: "duge",
    image: "/path/to/image.jpg",
    description: "This is duge",
  },
];

function CardList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    isPhone: true,
    isCar: true,
  });

  useEffect(() => {
    const isPhone = searchParams.get("isPhone") === "true";
    setFilters((prevFilters) => ({ ...prevFilters, isPhone }));
  }, [searchParams]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      [name]: checked,
    });
  };

  console.log(filters);
  console.log(searchParams);

  return (
    <div className="px-9 pt-6" >
      <form action="" className="flex gap-3 ">
        <label htmlFor="">
          cars:
          <input
            type="checkbox"
            name="isCar"
            onChange={handleCheckboxChange}
            checked={filters.isCar}
          />
        </label>

        <label htmlFor="">
          phones:
          <input
            type="checkbox"
            name="isPhone"
            onChange={handleCheckboxChange}
            checked={filters.isPhone}
          />
        </label>
      </form>
      <div className="flex flex-wrap justify-between mt-4" >
        {cards.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
