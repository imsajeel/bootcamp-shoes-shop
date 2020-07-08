import React from "react";
import CardList from "../CardList";
import BannerSlider from "../BannerSlider";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <BannerSlider />
      <CardList />
    </div>
  );
}
