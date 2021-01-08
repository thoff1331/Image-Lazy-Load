import "./App.css";
import React from "react";
// I added two seperate classNames to the image so that it was clear that the second image was not covering up thw first.
function ThumbNail() {
  return (
    <img
      alt="Blurry Shoe"
      className="thumbNail"
      src={"https://forge-homework.s3.amazonaws.com/thumb.jpg"}
    />
  );
}

export default ThumbNail;
