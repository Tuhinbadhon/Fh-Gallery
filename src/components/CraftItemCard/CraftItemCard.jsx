import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const CraftItemCard = ({ item, items, setItems }) => {
  const navigate = useNavigate();
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
  } = item;
  const { user } = useContext(AuthContext);
  const viewDetailsDeny = () => {
    Swal.fire({
      title: "Please Login to know more",
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
    <div data-aos="fade-up" data-aos-duration="1000" className="">
      <div className="card bg-base-100 h-full   shadow-xl">
        <figure className="px-4 h-full pt-4">
          <img
            src={image}
            alt="Shoes"
            className="max-h-44  max-[450px]:max-h-full md:max-h-64 w-full  rounded-xl"
          />
        </figure>
        <div className=" p-4">
          <h2 className="card-title">{item_name}</h2>
          <div className="">
            <p>
              Price: <span className="font-semibold">{price}$</span>
            </p>
            <p className="flex gap-1">
              Rating:{" "}
              <span className="font-semibold  flex items-center">
                {rating} <CiStar />{" "}
              </span>
            </p>
          </div>
          <div>
            <p>
              Customization:{" "}
              <span className="font-semibold">{customization}</span>
            </p>
            <p>
              StockStatus: <span className="font-semibold">{stockstatus}</span>
            </p>
          </div>
        </div>
        <div className="px-5 pb-5">
          {" "}
          {user ? (
            <Link to={`/craftitems/${item._id}`}>
              <button className="btn bg-indigo-400 w-full text-white rounded-xl">
                View Details
              </button>
            </Link>
          ) : (
            <button
              onClick={viewDetailsDeny}
              className="btn bg-indigo-400 w-full text-white rounded-xl"
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftItemCard;
