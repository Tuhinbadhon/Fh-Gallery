import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const CategoryPage = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("https://server-side-puce-alpha.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
        console.log(data);
      });
  }, []);
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>{id} Category</title>
        </Helmet>
      </HelmetProvider>
      {loading ? (
        <span className="loading loading-spinner text-error w-10 h-40"></span>
      ) : (
        <div className="hero min-h-screen bg-base-200 rounded-2xl my-10 max-w-sm md:max-w-md lg:max-w-full md:mx-auto">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left mb-5">
              <h1 className="text-2xl font-bold">
                Arts & Crafts of {id} category
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
              {arts &&
                arts.map((art) =>
                  art.subcategory == id ? (
                    <div
                      key={art._id}
                      className="card bg-base-100 h-full   shadow-xl"
                    >
                      <figure className="px-4 h-full pt-4">
                        <img
                          src={art.image}
                          alt={art._id}
                          className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
                        />
                      </figure>
                      <div className=" p-4">
                        <h2 className="card-title  ">
                          {art.item_name}
                          <div className="badge badge-secondary">
                            <FaStar /> {art.rating}{" "}
                          </div>
                        </h2>
                        <p className="text-base md:text-lg lg:text-lg">
                          {art.description}
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Category:</b> {art.subcategory}
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Price:</b> {art.price} $
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Customization:</b> {art.customization}
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Processing Time:</b> {art.processing_time} days
                        </p>
                        <p className="text-base md:text-lg lg:text-lg">
                          <b> Stock Status: </b> {art.stockstatus}
                        </p>
                        <div className=" flex flex-row justify-between max-w-full gap-3">
                          <Link
                            to={`/craftitems/${art._id}`}
                            className="btn w-full mt-2 btn-primary"
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
