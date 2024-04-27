import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllArtItems = () => {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>All Art & Craft Items</title>
        </Helmet>
      </HelmetProvider>
      <h2>This is all art and craft items</h2>
    </div>
  );
};

export default AllArtItems;
