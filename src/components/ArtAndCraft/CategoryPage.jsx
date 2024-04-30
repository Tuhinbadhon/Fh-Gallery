import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const CategoryPage = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch("https://server-side-puce-alpha.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <span className="loading loading-spinner text-error w-10 h-40"></span>
      ) : (
        <div className="hero min-h-screen bg-base-200 rounded-2xl my-10 max-w-sm md:max-w-md lg:max-w-full md:mx-auto">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left mb-5">
              <h1 className="text-5xl font-bold">
                Arts & Crafts of {id} category
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
              {arts &&
                arts.map((art) =>
                  art.category === id ? (
                    <div
                      key={art._id}
                      className="card card-compact w-auto bg-base-100 shadow-xl text-left"
                    >
                      <figure className="w-56 h-56 md:w-60 lg:w-64 mx-auto block">
                        <img
                          src={image}
                          alt={art._id}
                          className="object-cover w-full h-full"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-secondary ">
                          {art.itemName}
                          <div className="badge badge-secondary">
                            <FaStar /> {art.rating}{" "}
                          </div>
                        </h2>
                        <p className="text-base md:text-lg lg:text-lg">
                          {art.description}
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Category:</b> {art.category} $
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Price:</b> {art.price} $
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Customization:</b> {art.customization}
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Processing Time:</b> {art.processingTime} days
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Stock Status: </b> {art.stock}
                        </p>
                        <div className=" flex flex-row justify-between max-w-full gap-3">
                          <Link
                            to={`/craftitem/${art._id}`}
                            className="btn btn-primary"
                          >
                            <button>View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
