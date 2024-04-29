import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../CraftItemCard/CraftItemCard";

const CraftItem = () => {
  const loadeItems = useLoaderData();
  console.log(loadeItems);
  const [items, setItems] = useState(loadeItems);

  return (
    <div className="max-[450px]:p-4 md:p-5">
      <h2
        className="font-bold text-3xl text-center mb-4"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Our Craft Items
      </h2>

      <div className="flex justify-center items-center text-center">
        <div
          className="w-8/12 mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Craft items include woodworking, needlework, and digital design,
          created with tools like needles, paper, or software. These handmade
          pieces, such as knitted scarves or wooden sculptures, reflect the
          maker's skill and creativity, adding personal touch to homes.
        </div>
      </div>

      <div
        className="grid md:mx-5 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {items &&
          items.map((item) => (
            <CraftItemCard
              key={item._id}
              item={item}
              items={items}
              setItems={setItems}
            />
          ))}
      </div>
    </div>
  );
};

export default CraftItem;
