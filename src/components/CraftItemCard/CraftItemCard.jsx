import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { AuthContext } from "../../Provider/AuthProvider";

const CraftItemCard = (props) => {
  const navigate = useNavigate();
  const { item } = props;
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
      showCancelButton: true,
      confirmButtonText: "Login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return (
    <div className=" w-96 ">
      <div className="card  bg-base-100 h-full border shadow-xl">
        <figure className="px-5 h-full pt-4">
          <img
            src={image}
            alt="Shoes"
            className="max-h-44 max-[450px]:max-h-full md:max-h-64 w-full rounded-xl"
          />
        </figure>
        <div className="p-4 items-center text-center mx-auto ">
          <h2 className="flex gap-2">
            <b>{item_name}</b>

            <sub>
              <span className="font-semibold flex items-center">
                {rating} <CiStar />
              </span>
            </sub>
          </h2>
          <div className="">
            <p className="">
              Price: <span className="font-semibold ">{price}$</span>
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

CraftItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default CraftItemCard;
