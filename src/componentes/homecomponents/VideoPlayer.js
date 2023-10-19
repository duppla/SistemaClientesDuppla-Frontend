import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <video width="640" height="360" controls controlsList="nodownload">
      <source src={src} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default VideoPlayer;
