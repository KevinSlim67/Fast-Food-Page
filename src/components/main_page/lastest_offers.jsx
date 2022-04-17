import React from "react";

function LatestOffers() {
  return (
    <div className="relative w-full">
        <h2 className="text-center uppercase text-3xl text-primary font-bold mb-7">Check out our latest offers !</h2>
      <div id="latest-offers" className="w-full">
        <div id="offer1" className="rounded z-20 bg-primary_lighter">
            <img src="https://i.ibb.co/Nt7kRch/mixn-match.jpg" className="object-cover rounded" />
        </div>
        <div id="offer2" className="rounded z-20 bg-third_lighter"></div>
        <div id="offer3" className="rounded z-20 bg-accent_lighter"></div>
      </div>
    </div>
  );
}

export default LatestOffers;
