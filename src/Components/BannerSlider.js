import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import banners from "../database/banners";

export default function BannerSlider() {
  return (
    <div className="homeSlider">
      <SimpleImageSlider
        width={"100%"}
        height={"100%"}
        images={banners}
        style={{ margin: "auto" }}
      />
    </div>
  );
}
