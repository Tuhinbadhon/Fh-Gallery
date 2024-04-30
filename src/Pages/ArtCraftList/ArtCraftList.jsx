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
  const [filter, setFilter] = useState("all"); // Default filter: all
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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    const filterLower = filter.toLowerCase();
    const customizationLower = item.customization.toLowerCase();
    if (filterLower === "all") {
      return true; // Show all items
    } else {
      return customizationLower === filterLower; // Show items based on filter
    }
  });

  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>My Art & Craft List</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex justify-center items-center mb-4">
        <label
          htmlFor="filter"
          className="mr-2 text-xl text-lime-800 font-bold"
        >
          Customization:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="border rounded-md px-2 py-1"
        >
          <option value="all">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
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
          {filteredItems.map((item) =>
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
