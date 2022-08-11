import React from "react";
import GIF from "../assets/video.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: 100%;
    border-radius: 4rem;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={GIF} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  );
};
export default CoverVideo;
