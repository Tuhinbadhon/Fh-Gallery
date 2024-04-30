import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const CraftItemDetails = () => {
  const helmetContext = {};
  const items = useLoaderData();
  console.log(items);

  return (
    <div className="lg:mt-10 mt-5">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>{items.item_name}</title>
        </Helmet>
      </HelmetProvider>
      <div className="md:flex bg-base-100 shadow-xl">
        <figure className=" ">
          <img
            src={items.image}
            alt="Album"
            className="p-4  md:max-w-96 lg:max-w-[700px] lg:max-h-[500px] "
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-row justify-between">
            <h2 className="card-title">{items.item_name} </h2>
          </div>

          <p>[ {items.subcategory} ]</p>
          <p>{items.description} </p>
          <p>
            {" "}
            <b>Price : </b> {items.price}${" "}
          </p>

          <p>
            {" "}
            <b>Available : </b> {items.stockstatus}{" "}
          </p>
          <p>
            <b>Processing Time : </b>
            {items.processing_time}{" "}
          </p>
          <p>
            {" "}
            <b>Customization:</b> {items.customization}
          </p>
          <p>
            <b>User Email: </b>
            {items.user_email}
          </p>
          <p>
            <b>User Name: </b>
            {items.user_name}
          </p>
          <Link to="/" className="card-actions justify-end mt-4">
            <button className="btn w-full bg-indigo-400 text-white hover:bg-indigo-300">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftItemDetails;
