import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ItemsCard = ({ item, items, setItems }) => {
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
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fhgallery.vercel.app/items/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = items.filter((ite) => ite._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="max-[450px]:mx-5 lg:flex  justify-center items-center bg-base-100 rounded-lg border">
      <div className="lg:max-w-60  md:w-full  max-[450px]:w-full p-3 ">
        <img
          src={image}
          className=" max-h-44 max-[450px]:max-h-full md:max-h-52 w-full  rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center w-full p-3">
        <div className="">
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
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <Link to={`/updateitems/${_id}`}>
              <button className="px-2 border py-1  bg-green-700 text-white rounded-md hover:bg-green-500">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className=" px-2 border py-1 bg-red-700 text-white rounded-md hover:bg-red-500  "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
