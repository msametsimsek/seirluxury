import React from "react";
// import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Campaigns from "../components/Campaigns/Campaigns";
import Categories from "../components/Categories/Categories";
//import Products from "../components/Products/Products";
//import Brands from "../components/Brands/Brands";
import Sliders from "../components/Slider/Sliders";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      {/* <Products /> */}
      <Campaigns />
      {/* <Blogs /> */}
      {/* <Brands />  */}
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;