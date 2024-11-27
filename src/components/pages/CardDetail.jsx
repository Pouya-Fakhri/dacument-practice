import React from "react";
import { Link, useParams } from "react-router-dom";

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

function CardDetail() {
  const { cardId } = useParams();
  const renderCard = cards.filter((item) => item.id == cardId);
  console.log(cardId);
  console.log(renderCard);

  return (
    <div className="w-screen px-9 pt-6 flex flex-col">
      <img src={renderCard[0].image} className="w-96 h-96 bg-slate-600" />
      <h1 className="text-[52px] font-bold">{renderCard[0].title}</h1>
      <h2 className="text-[32px] " >{renderCard[0].description}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dicta
        saepe quas dolor qui nobis voluptatem odio assumenda atque similique
        voluptates et quis, a voluptas pariatur autem nihil quidem perferendis.
        Cumque voluptatum, maxime repellat nesciunt hic, deserunt aliquid
        temporibus fugiat non vitae quasi earum quisquam! Non libero, possimus
        commodi consequuntur aliquid dolores. Sunt dolore sequi error sapiente
        fugiat labore itaque.
      </p>
      <Link to="/" className="w-24 bg-cyan-800 text-white flex justify-center items-center rounded-3xl ">back</Link>
    </div>
  );
}

export default CardDetail;
