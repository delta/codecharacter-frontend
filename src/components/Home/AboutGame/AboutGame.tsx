import styles from './AboutGame.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import mapimg from './../../../../src/assets/deltaMap.png';

export default function AboutGame(): JSX.Element {
  return (
    <div>
      <div className={styles.about}>
        <Container fluid className={styles.aboutcontainer}>
          <Row>
            <Col className={styles.col1}>
              <div className={styles.aboutImage}>
                <img
                  src={mapimg}
                  style={{
                    objectFit: 'cover',
                  }}
                ></img>
              </div>
            </Col>
            <Col className={styles.col2}>
              <div className={styles.content}>
                The objective is to destroy and vanquish the opponent&apos;s
                territory by writing code and creating defenses via the in-game
                map. With progress and implementation of new competitive
                strategies, fight your way through, and dominate the top of the
                leaderboard.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
