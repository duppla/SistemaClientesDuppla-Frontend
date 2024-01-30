import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ src }) {
  const sandboxAttributes = 'allow-same-origin allow-scripts allow-popups allow-forms allow-downloads';

  return (

      <video
      className='video-docs'
     /*  autoPlay */
      controls
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()} // Evita el menú contextual
    >
      <source src={src} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
    
  
  );
}

export default VideoPlayer;
