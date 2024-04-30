import React, { useState, useEffect, useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ItemsCard from "../../components/ItemsCard/ItemsCard";
import { AuthContext } from "../../Provider/AuthProvider";

const ArtCraftList = () => {
  const helmetContext = {};
  const loadedItems = useLoaderData();
  const [items, setItems] = useState(loadedItems);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Update state with fetched items
    setItems(loadedItems);
    setLoading(false);
  }, [loadedItems]);

  useEffect(() => {
    if (Array.isArray(items)) {
      setLoading(false);
    } else {
      setError("Data is not an array");
    }
  }, [items]);
  console.log("user email:", user.email);
  console.log("loaded items:", loadedItems);
  console.log("items:", items);

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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid md:mx-5 md:grid-cols-2 gap-4 mt-8"
        >
          {items &&
            items.map((item) =>
              item.user_email === user.email ? (
                <ItemsCard
                  key={item._id}
                  item={item}
                  items={items}
                  setItems={setItems}
                />
              ) : null
            )}
        </div>
      )}
    </div>
  );
};

export default ArtCraftList;
