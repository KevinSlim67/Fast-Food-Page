import React from "react";
import LatestOffers from "./lastest_offers";
import PlaceOrder from "./place_order";

function MainPage() {
  return (
    <div className="relative h-full">
      <LatestOffers />
      <hr className="border-primary_darker m-16" />
      <PlaceOrder />
    </div>
  );
}

export default MainPage;
