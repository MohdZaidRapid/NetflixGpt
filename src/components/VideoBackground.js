import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // fetch trailer videos
  // const [trailerId, setTrailerId] = useState(null);

  // const dispatch = useDispatch();
  // get trailer video fetching the store video data
  // const getMoviesVideos = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/1096197/videos?language=en-US",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json);

  //   const filterData = json.results.filter((video) => video.type === "Trailer");
  //   const trailer = filterData.length ? filterData[0] : json.results[0];

  //   console.log(trailer);
  //   // setTrailerId(trailer.key);
  //   dispatch(addTrailerVideo(trailer));
  // };

  // useEffect(() => {
  //   getMoviesVideos();
  // }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;