import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ArtCraftList = () => {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>My Art & Craft List</title>
        </Helmet>
      </HelmetProvider>
      <h2>Art and Craftlist here</h2>
    </div>
  );
};

export default ArtCraftList;
