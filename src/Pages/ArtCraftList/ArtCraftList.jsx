import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ItemsCard from "../../components/ItemsCard/ItemsCard";

const ArtCraftList = () => {
  const helmetContext = {};
  const loadeItems = useLoaderData();
  const [items, setItems] = useState(loadeItems);
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>My Art & Craft List</title>
        </Helmet>
      </HelmetProvider>
      <h2
        data-aos="fade-left"
        data-aos-duration="1000"
        className="font-bold text-3xl text-center mb-4"
      >
        My Art and Craft list
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid md:mx-5 md:grid-cols-2 gap-4 mt-8"
      >
        {items.map((item) => (
          <ItemsCard
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

export default ArtCraftList;
