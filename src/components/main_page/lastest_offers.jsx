import React from "react";

function LatestOffers() {
  return (
    <div className="relative w-full">
      <h2 className="text-center uppercase text-3xl text-primary font-bold mb-7">
        Check out our latest offers !
      </h2>
      <div className="flex justify-center">
        <div id="latest-offers">
          <div id="offer1" className="offer rounded z-20 bg-primary_lighter">
            <img
              src="https://i.ibb.co/6BHJ2Qt/mixn-match-transparent.png"
              className="object-contain rounded"
            />
          </div>
          <div className="offer rounded z-20 bg-third_lighter">
            <img
              src="https://i.ibb.co/q07DcYy/king-deal.png"
              className="object-contain rounded"
            />
          </div>
          <div id="offer3" className="offer rounded z-20 bg-accent_lighter">
            <img
              src="https://i.ibb.co/6nKBGnw/pizza-deal-1.png"
              className="object-contain rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestOffers;
