import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <div className={styles.footerContainer}>
      <div>
        <div className={styles.credit}>
          <div className={styles.creditText}>
            Made with <span className={styles.heart}>❤</span> by{' '}
          </div>
          <div>
            <a
              target="_blank"
              href="https://delta.nitt.edu/"
              rel="noreferrer"
              className={styles.title}
            >
              Delta Force
            </a>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.container}>
          <div className={styles.heading}> Contact</div>
          <div>
            Shubham: <span className={styles.number}>+91 9790959370</span>
          </div>
          <div>
            Bhoopesh: <span className={styles.number}> +91 9962099029</span>
          </div>
          <div>
            Raghavan: <span className={styles.number}> +91 9940107606 </span>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.heading}>Quick Links</div>
          <div>
            <NavLink className={styles.links} to="/dashboard">
              DashBoard
            </NavLink>
          </div>
          <div>
            <a
              href="https://codecharacter-docs-2024.netlify.app/"
              rel="noreferrer noopener"
              target="_blank"
              className={styles.links}
            >
              Documentation
            </a>
          </div>
          <div>
            <a
              href="https://discord.gg/QcYMveUaGQhttps://discord.gg/GUzVRKUHgY"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.links}
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
