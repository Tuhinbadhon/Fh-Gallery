import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AllArtItems = () => {
  const [arts, setArts] = useState();
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://server-side-puce-alpha.vercel.app/items")
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
        <span className="loading loading-spinner  text-error w-10 h-40"></span>
      ) : (
        <div className="hero min-h-screen overflow-auto bg-base-200 rounded-2xl my-10 max-w-sm md:max-w-md lg:max-w-full mx-auto">
          <div className="hero-content flex-col">
            <div
              data-aos="fade-up"
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
              <div className="overflow-auto ">
                <table className="table table-striped table-hover border ">
                  <thead className=" font-semibold text-base md:text-xl lg:text-xl">
                    <tr>
                      <th className="border ">Serial</th>
                      <th className="border ">Art Name</th>
                      <th className="border ">Category</th>
                      <th className="border ">Rating</th>
                      <th className="border ">Artist</th>
                      <th className="border "></th>
                    </tr>
                  </thead>
                  <tbody className=" font-normal text-base md:text-lg lg:text-lg">
                    {arts &&
                      arts.map((art) => (
                        <tr key={art._id} className="">
                          <td className="border ">{serial++}</td>
                          <td className="border ">{art.item_name}</td>
                          <td className="border ">{art.subcategory}</td>
                          <td className="border">{art.rating}</td>
                          <td className="border">{art.user_name}</td>
                          <td className="border">
                            {user ? (
                              <Link to={`/craftitems/${art._id}`}>
                                <button className="btn bg-indigo-400 btn-sm rounded-3xl">
                                  View Details
                                </button>
                              </Link>
                            ) : (
                              <button
                                onClick={viewDetailsDeny}
                                className="btn text-white bg-indigo-400 rounded-3xl"
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
