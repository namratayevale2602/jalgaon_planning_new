import React from "react";
import HeroCarousel from "./Banner";
// import NoticesSection from "./Scrolling";
// import { RawContentDisplay } from "./District";
import AboutDistrict from "./AboutDistrict";
// import RecentBlogs from "./RecentBlogs";
import AboutDPC from "./AboutDPC";
// import LatestUpdates from "./LatestUpdates";

import Services from "./Services";
import UsefulLinks from "./UsefulLinks";
import DataCard from "./politics";

function Home() {
  return (
    <div>
      <HeroCarousel />
      {/* <LatestUpdates /> */}
      <AboutDistrict />
      <UsefulLinks />
      <AboutDPC />
      <Services />
      <DataCard />
      {/* <RecentBlogs /> */}
    </div>
  );
}

export default Home;
