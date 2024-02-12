import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './BackGroundVideo.module.css';
import bgvideo from '../../../public/assets/bgEffect.mp4';

const BackGroundVideo = () => {
  const location = useLocation();
  const vid = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vid.current) {
      vid.current.playbackRate = 0.5;
    }
  }, []);

  const isNotHomePage = location.pathname !== '/';

  return (
    <>
      {isNotHomePage ? (
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          className={styles.bgvideo}
          ref={vid}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default BackGroundVideo;
