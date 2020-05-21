import React from 'react';
import './Poster.scss';

const { useRef } = React;
const altImgSrc = 'assets/grey_x.png';

type Props = {
  poster: string;
};

export const Poster: React.FunctionComponent<Props> = (props) => {
  const imgRef = useRef();
  return (
    <img
      className="poster"
      ref={imgRef}
      src={props.poster}
      onError={(e) => {
        //TODO: change to more reliable mechanism
        //it is an infinite loop right now, when altImg is unavailable;
        const img = imgRef.current as HTMLImageElement;
        img.src = altImgSrc;
      }}
    />
  );
};
