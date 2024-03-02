import React from "react";
import Banner from "../../components/Banner/Banner";
// @ts-ignore
import BannerImg from "../../assets/banner_img2.jpeg";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div className="main">
      <Banner
        src={BannerImg}
        alt={`Photo d'une côte`}
        title={"Chez vous, partout et ailleurs"}
      />
      <Gallery />
    </div>
  );
}
export default Home;
