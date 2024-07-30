import React from "react";

interface YouTubeEmbedProps {
  embedId: string;
}

const PrimaryVideo: React.FC<YouTubeEmbedProps> = ({ embedId }) => (
  <div className="w-[100%]">
    <iframe width="600px" height="400px" src={`https://www.youtube.com/embed/${embedId}`} frameBorder="0" allowFullScreen />
  </div>
);

export default PrimaryVideo;
