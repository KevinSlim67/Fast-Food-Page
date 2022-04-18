import React, { Component } from "react";

function PlaceOrder() {
  return (
    <div className="flex flex-col">
      <h2 className="text-center uppercase text-3xl text-primary font-bold mb-7">
        You can get delivered now !
      </h2>
      <div
        id="order-form"
        className="bg-accent_o_95 text-accent self-center rounded-3xl p-5 font-medium text-lg mb-11"
      >
        <form>
          <div className="field">
            <label htmlFor="name" id="name-label" className="required">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className='input'
              placeholder="Enter your name"
              required
            ></input>
          </div>

          <div className="flex justify-between ">
            <div className="field grow mr-2">
              <label htmlFor="area" id="area-label" className="required">
                Area
              </label>
              <input
                type="text"
                name="area"
                id="area"
                className='input'
                placeholder="Enter your area name"
                required
              ></input>
            </div>

            <div className="field grow ml-2">
              <label htmlFor="city" id="city-label" className="required">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className='input'
                placeholder="Enter your city name"
                required
              ></input>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="field grow mr-2">
              <label htmlFor="street" id="street-label" className="required">
                Street
              </label>
              <input
                type="text"
                name="street"
                id="street"
                className='input'
                placeholder="Enter your street name"
                required
              ></input>
            </div>

            <div className="field grow ml-2">
              <label htmlFor="home" id="home-label" className="required">
                Building / House
              </label>
              <input
                type="text"
                name="home"
                id="home"
                className='input'
                placeholder="Enter your building or house's name"
                required
              ></input>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="field grow mr-2">
              <label htmlFor="floor" id="floor-label">
                Floor Number
              </label>
              <input
                type="number"
                name="floor"
                id="floor"
                className='input'
                placeholder="Enter your floor number"
              ></input>
            </div>

            <div className="field grow ml-2">
              <label htmlFor="room" id="room-label">
                Room Number
              </label>
              <input
                type="number"
                name="room"
                id="room"
                className='input'
                placeholder="Enter your room number"
                required
              ></input>
            </div>
          </div>

          <div className="field">
            <label htmlFor="name" id="phone-label" className="required">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className='input'
              placeholder="Enter your phone number"
              required
            ></input>
          </div>

          <div className="field">
            <label htmlFor="order" id="order" className="required">
              Order
            </label>
            <textarea
              type="text"
              name="order"
              id="order"
              className='input h-36 resize-none'
              placeholder="Enter your order"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary_darker hover:bg-primary opacity-80 text-secondary text-2xl p-2 pl-5 pr-5 rounded-3xl font-bold"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder;
