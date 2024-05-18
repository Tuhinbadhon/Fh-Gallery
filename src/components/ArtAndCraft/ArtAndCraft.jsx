import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ArtAndCraft = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const viewDetailsDeny = () => {
    Swal.fire({
      title: "Login to view category",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Login",
      // denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return (
    <div className="mt-20 max-[450px]:mt-14">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center my-10"
      >
        <h1 className="text-3xl font-bold">Arts & Craft Categories</h1>
      </div>
      <div className="text-center md:flex md:justify-center md:items-center ">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:w-8/12 md:mb-4"
        >
          Art and craft categories span various mediums, including painting,
          sculpture, textiles, and woodworking, offering diverse avenues for
          creative expression and exploration.
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid md:mt-16 mt-5  h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
      >
        {/* landscape category */}
        <div className="card bg-base-100 h-full border  shadow-xl">
          <figure className="px-4 h-full pt-4">
            <img
              src="https://i.ibb.co/Wg7J930/landscape.jpg"
              alt="Landscape"
              className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
            />
          </figure>
          <div className="p-4">
            <h2 className="card-title mt-2 ">Landscape Category</h2>
            <p className="text-left mt-2">Excellent landscape paintings</p>
            <div className="card-actions mt-5 justify-end">
              {user ? (
                <Link
                  className="btn w-full btn-primary"
                  to="/category/landscape"
                >
                  <button>View Category</button>
                </Link>
              ) : (
                <button
                  className="btn  w-full btn-primary"
                  onClick={viewDetailsDeny}
                >
                  View Category
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Portrait category */}
        <div className="card bg-base-100 h-full border  shadow-xl">
          <figure className="px-4 h-full pt-4">
            <img
              src="https://i.ibb.co/dBsXVFR/portrait.jpg"
              alt="portrait"
              className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
            />
          </figure>
          <div className="p-4">
            <h2 className="card-title mt-2 ">Portrait Drawing Category</h2>
            <p className="text-left mt-2">
              Beautiful and expert portrait paintings
            </p>
            <div className="card-actions mt-5 justify-end">
              {user ? (
                <Link
                  className="btn w-full btn-primary"
                  to="/category/portrait"
                >
                  <button>View Category</button>
                </Link>
              ) : (
                <button
                  className="btn w-full btn-primary"
                  onClick={viewDetailsDeny}
                >
                  View Category
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Watercolor category */}
        <div className="card bg-base-100 h-full border  shadow-xl">
          <figure className="px-4 h-full pt-4">
            <img
              src="https://i.ibb.co/0p54pCX/Watercolor-Painting.jpg"
              alt="watercolor"
              className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
            />
          </figure>
          <div className="p-4">
            <h2 className="card-title mt-2 ">Watercolor Painting Category</h2>
            <p className="text-left mt-2">
              Watercolor paintings with modern art
            </p>
            <div className="card-actions mt-5 justify-end">
              {user ? (
                <Link
                  className="btn w-full btn-primary"
                  to="/category/watercolor"
                >
                  <button>View Category</button>
                </Link>
              ) : (
                <button
                  className="btn w-full btn-primary"
                  onClick={viewDetailsDeny}
                >
                  View Category
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Oil Painting category */}
        <div className="card bg-base-100 h-full border  shadow-xl">
          <figure className="px-4 h-full pt-4">
            <img
              src="https://i.ibb.co/rsSCZXd/Oil-Painting.jpg"
              alt="Oil Painting"
              className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
            />
          </figure>
          <div className="p-4">
            <h2 className="card-title mt-2 ">Oil Painting Category</h2>
            <p className="text-left mt-2">Wonderful Oil Color Paintings </p>
            <div className="card-actions mt-5 justify-end">
              {user ? (
                <Link className="btn w-full btn-primary" to="/category/oil">
                  <button>View Category</button>
                </Link>
              ) : (
                <button
                  className="btn w-full btn-primary"
                  onClick={viewDetailsDeny}
                >
                  View Category
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Charcoal category */}
        <div className="card bg-base-100 h-full border  shadow-xl">
          <figure className="px-4 h-full pt-4">
            <img
              src="https://i.ibb.co/Cn0DfCm/Charcoal-Art.jpg"
              alt="Charcoal"
              className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
            />
          </figure>
          <div className="p-4">
            <h2 className="card-title mt-2 ">Charcoal Art Category</h2>
            <p className="text-left mt-2">
              Fine brushstrokes and sketches of charcoal paintings
            </p>
            <div className="card-actions mt-5 justify-end">
              {user ? (
                <Link
                  className="btn w-full btn-primary"
                  to="/category/charcoal"
                >
                  <button>View Category</button>
                </Link>
              ) : (
                <button
                  className="btn w-full btn-primary"
                  onClick={viewDetailsDeny}
                >
                  View Category
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Cartoon category */}
        <div className="card bg-base-100 h-full border  shadow-xl">
          <figure className="px-4 h-full pt-4">
            <img
              src="https://i.ibb.co/HtMgV83/vector-illustration-of-cartoon-artist-boy-G3-F7-GN.jpg"
              alt="cartoon"
              className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
            />
          </figure>
          <div className="p-4">
            <h2 className="card-title mt-2 ">Cartoon Art Category</h2>
            <p className="text-left mt-2">
              Funny and realistic cartoon paintings
            </p>
            <div className="card-actions mt-5 justify-end">
              {user ? (
                <Link className="btn w-full btn-primary" to="/category/cartoon">
                  <button>View Category</button>
                </Link>
              ) : (
                <button
                  className="btn w-full btn-primary"
                  onClick={viewDetailsDeny}
                >
                  View Category
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraft;
