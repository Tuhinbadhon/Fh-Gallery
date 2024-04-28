import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateItems = () => {
  const items = useLoaderData();
  const {
    _id,
    image,
    item_name,
    subcategory,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockstatus,
    user_email,
    user_name,
  } = items;
  return (
    <div>
      <h2>update here:{item_name}</h2>
    </div>
  );
};

export default UpdateItems;
