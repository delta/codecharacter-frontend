import Footer from '../../components/Home/Footer/Footer';
import Glitchtext from '../../components/Home/Glitchtext/Title';
import AboutGame from '../../components/Home/AboutGame/AboutGame';
import styles from './Home.module.css';
export default function Home(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <Glitchtext className={styles.title} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.vcr}>
          <AboutGame />
        </div>
      </div>
      <Footer />
    </div>
  );
}
