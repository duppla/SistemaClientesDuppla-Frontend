import React from 'react';

function VideoPlayer({ src }) {
  const sandboxAttributes = 'allow-same-origin allow-scripts allow-popups allow-forms allow-downloads="false"';

  return (
    <iframe
      className='video-docs'
      src={src}
      allowFullScreen
      title='Google Drive Video'
      sandbox={sandboxAttributes}
    ></iframe>
  );
}


export default VideoPlayer;
