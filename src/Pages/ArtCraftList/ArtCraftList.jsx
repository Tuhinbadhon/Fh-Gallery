import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ArtCraftList = () => {
  const helmetContext = {};
  const items = useLoaderData();
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>My Art & Craft List</title>
        </Helmet>
      </HelmetProvider>
      <h2 className="font-bold text-3xl text-center mb-4">
        My Art and Craft list : {items.length}
      </h2>
    </div>
  );
};

export default ArtCraftList;
