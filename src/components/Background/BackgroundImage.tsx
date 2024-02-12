import styles from './BackgroundImage.module.css';
import bg from '../../../public/assets/bg.jpg';
import { useLocation } from 'react-router-dom';

const BackgroundImage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? (
        <div className={styles.mainContainer}>
          <img src={bg} alt="Background" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BackgroundImage;
