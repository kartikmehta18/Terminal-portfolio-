// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// export default function BackgroundImage() {
// 	return (
// 		<div className="absolute top-0 w-full h-screen -z-10">
// 			<LazyLoadImage
// 				src="/wallpapper.jpeg"
// 				alt="wallpaper"
// 				className="h-full w-full object-cover object-center"
// 				effect="blur"
// 				wrapperClassName="wrapper w-full h-full p-0 m-0 object-cover object-center bg-black bg-opacity-70"
// 			/>
// 		</div>
// 	);
// }

import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="absolute top-0 w-full h-screen -z-10">
      <video
        autoPlay
        loop
        muted
        className="h-full w-full object-cover object-center"
        style={{ filter: "blur(0px)" }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
