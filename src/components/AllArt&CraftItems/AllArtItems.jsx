import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AllArtItems = () => {
  const [arts, setArts] = useState();
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
      });
  }, []);

  let serial = 1;

  const navigate = useNavigate();
  const viewDetailsDeny = () => {
    Swal.fire({
      title: "Login to view details",
      showCancelButton: true,
      confirmButtonText: "Login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };
  const helmetContext = {};

  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>All Art & craft Items </title>
        </Helmet>
      </HelmetProvider>
      {loading ? (
        <span className="loading loading-spinner text-error w-10 h-40"></span>
      ) : (
        <div className="hero min-h-screen bg-base-200 rounded-2xl my-10 max-w-sm md:max-w-md lg:max-w-full md:mx-auto">
          <div className="hero-content flex-col">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl font-bold">Our All Arts & Crafts</h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="overflow-x-auto"
            >
              <div className="overflow-x-auto max-w-72 md:max-w-full lg:max-w-full">
                <table className="table table-striped table-hover border border-black">
                  <thead className="text-black font-semibold text-base md:text-xl lg:text-xl">
                    <tr>
                      <th className="border border-black">Serial</th>
                      <th className="border border-black">Art Name</th>
                      <th className="border border-black">Category</th>
                      <th className="border border-black">Rating</th>
                      <th className="border border-black">Artist</th>
                      <th className="border border-black"></th>
                    </tr>
                  </thead>
                  <tbody className="text-black font-normal text-base md:text-lg lg:text-lg">
                    {arts &&
                      arts.map((art) => (
                        <tr key={art._id} className="border border-black">
                          <td className="border border-black">{serial++}</td>
                          <td className="border border-black">
                            {art.item_name}
                          </td>
                          <td className="border border-black">
                            {art.subcategory}
                          </td>
                          <td className="border border-black">{art.rating}</td>
                          <td className="border border-black">
                            {art.user_name}
                          </td>
                          <td className="border border-black">
                            {user ? (
                              <Link to={`/craftitems/${art._id}`}>
                                <button className="btn btn-secondary btn-sm rounded-3xl">
                                  View Details
                                </button>
                              </Link>
                            ) : (
                              <button
                                onClick={viewDetailsDeny}
                                className="btn btn-secondary rounded-3xl"
                              >
                                View Details
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllArtItems;
