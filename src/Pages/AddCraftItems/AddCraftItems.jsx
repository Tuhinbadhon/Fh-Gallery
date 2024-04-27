import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AddCraftItems = () => {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Add Craft Items</title>
        </Helmet>
      </HelmetProvider>
      <h2>here is addcraft sec</h2>
    </div>
  );
};

export default AddCraftItems;
