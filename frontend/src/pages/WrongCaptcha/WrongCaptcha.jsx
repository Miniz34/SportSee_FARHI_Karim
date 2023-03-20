import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";
import ReactPlayer from "react-player";

import "./style.scss";

/**
 * Render the error page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function Error() {
  return (
    <>
      <Header />
      <Aside />
      <div className="player-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          playing="true"
          controls="true"
        />
      </div>
    </>
  );
}

export default Error;
