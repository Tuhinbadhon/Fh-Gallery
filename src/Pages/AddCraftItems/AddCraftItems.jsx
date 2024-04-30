import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddCraftItems = () => {
  const { user } = useContext(AuthContext);
  const handleAddItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockstatus = form.stockstatus.value;
    const user_email = user.email;
    const user_name = user.displayName;

    const newItem = {
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
    };
    console.log(newItem);
    //send data to the server

    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  const helmetContext = {};
  return (
    <div className="bg-[#F4F3F0] rounded-xl p-10">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Add Craft Items</title>
        </Helmet>
      </HelmetProvider>
      <h2
        data-aos="fade-left"
        data-aos-duration="1000"
        className="font-bold text-3xl text-center mb-4"
      >
        Add Your Items Here
      </h2>
      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        onSubmit={handleAddItems}
      >
        {/* Form image */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text"> Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="https://www..."
                className="input input-bordered w-full"
                name="image"
                id=""
              />
            </label>
          </div>
        </div>
        {/* Form item name */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Item Name"
                className="input input-bordered w-full"
                name="item_name"
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text"> Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
                name="subcategory"
                id=""
              />
            </label>
          </div>
        </div>
        {/* Form description */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full"
                name="description"
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text"> Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
                name="price"
                id=""
              />
            </label>
          </div>
        </div>
        {/* Form rating */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full"
                name="rating"
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text"> Customization</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Yes/No"
                className="input input-bordered w-full"
                name="customization"
                id=""
              />
            </label>
          </div>
        </div>
        {/* Form Processing time */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Processing Time"
                className="input input-bordered w-full"
                name="processing_time"
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text"> StockStatus</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="In Stoke/Made to Order"
                className="input input-bordered w-full"
                name="stockstatus"
                id=""
              />
            </label>
          </div>
        </div>
        {/* Form Email */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                disabled
                type="text"
                placeholder="username@mail.com"
                className="input input-bordered w-full"
                value={user.email}
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text"> User Name</span>
            </label>
            <label className="input-group">
              <input
                disabled
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                value={user.displayName}
                id=""
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="ADD ITEM"
          className="btn btn-block bg-gray-600 max-[450px]:mt-5 text-white hover:bg-green-600 "
        />
      </form>
    </div>
  );
};

export default AddCraftItems;
