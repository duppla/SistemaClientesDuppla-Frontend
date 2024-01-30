import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ src }) {
  const sandboxAttributes = 'allow-same-origin allow-scripts allow-popups allow-forms allow-downloads';

  return (
    <iframe
      className='video-docs'
      src={src}
      allowFullScreen
      title='Google Drive Video'
      sandbox={sandboxAttributes}
      target="_self"
    ></iframe>
  );
}



export default VideoPlayer;
