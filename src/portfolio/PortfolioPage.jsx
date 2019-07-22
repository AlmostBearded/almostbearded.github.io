// @flow
import React from "react";
import { Link } from "react-navi";
import pinRacer from "./pin-racer/project";

const PortfolioPage = () => (
  <div>
    <h1 className="display-1 text-center">Portfolio</h1>
    <hr className="mt-3 mb-4" />
    <Link href="./pin-racer">
      <img src={pinRacer.thumbnail} alt="paysafecard PIN Racer Thumbnail" />
    </Link>
  </div>
);

export default PortfolioPage;
