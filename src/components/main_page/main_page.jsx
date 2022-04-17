import React from "react";
import LatestOffers from "./lastest_offers";
import PlaceOrder from "./place_order";

function MainPage() {
  return (
    <div className="relative h-full m-16">
      <LatestOffers />
      <hr className="outline-accent m-16" />
      <PlaceOrder />
    </div>
  );
}

export default MainPage;
