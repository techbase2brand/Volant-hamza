import React from "react";
import Banner from "../Banner/Banner";
import Date from "../Date/Date";
import Enhances from "../Enhances/Enhances";
import Family from "../Family/Family";
import Friends from "../Friends/Friends";
import Handmade from "../Handmade/Handmade";
import HowDoes from "../HowDoes/HowDoes";
import OfferEnds from "../OfferEnds/OfferEnds";
import Product from "../Product/Product";
import Recommended from "../Recommended/Recommended";
import Scandinavian from "../Scandinavian/Scandinavian";
import Video from "../Video/Video";
import Whyhow from "../Whyhow/Whyhow";
import OurTechnology from "../OurTechnology/OurTechnology";
import HeroBanner from "../HeroBanner/HeroBanner";
import UsageStep from "../UsageStep/UsageStep";
import FavourInterior from "../FavourInterior/FavourInterior";
import FeelBetter from "../FeelBetter/FeelBetter";
import FeelBetterSecond from "../FeelBetterSecond/FeelBetterSecond";
import WeControl from "../WeControl/WeControl";
import BestQuality from "../BestQuality/BestQuality";
import Founder from "../Founder/Founder";
import Partners from "../Partners/Partners";
import Letter from "../Letter/Letter";
import CompareTable from "../CompareTable/CompareTable";
import GetTheOffer from "../GetTheOffer/GetTheOffer";

const Home = () => {
  return (
      <>
      <Banner></Banner>
      <Recommended></Recommended>
      <Video></Video>
      <Whyhow />
      <OfferEnds />
      <Scandinavian />
      <GetTheOffer />
      <React.StrictMode>
      <Product />
      </React.StrictMode>
      <CompareTable />
      <Enhances />
      <Family />
      <Friends />
      <Date />
      <OurTechnology />
      <HeroBanner />
      <UsageStep />
      <FavourInterior />
      <FeelBetter />
      <FeelBetterSecond />
      <WeControl />
      <BestQuality />
      <Founder />
      <Partners />
      <Letter />
    </>
  );
};

export default Home;
