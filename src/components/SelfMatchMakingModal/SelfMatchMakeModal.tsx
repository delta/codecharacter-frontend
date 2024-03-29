import { useEffect, useState } from 'react';
import styles from './SelfMatchModalStyle.module.css';
import Button from 'react-bootstrap/Button';
import { FormGroup, Col, Container, Row, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  isSelfMatchModalOpen,
  isSelfMatchModalOpened,
  codeCommitID,
  codeCommitIDChanged,
  mapCommitID,
  mapCommitIDChanged,
  mapCommitNameChanged,
  codeCommitName,
  mapCommitName,
  codeCommitNameChanged,
} from '../../store/SelfMatchMakeModal/SelfMatchModal';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import {
  AuthApi,
  CodeApi,
  CodeRevision,
  GameMapRevision,
  MapApi,
  MatchApi,
  MatchMode,
} from '@codecharacter-2024/client';
import Toast from 'react-hot-toast';

const selfMatchModal = (): JSX.Element => {
  const IsSelfMatchModalOpen = useAppSelector(isSelfMatchModalOpen);
  const CodeCommitID = useAppSelector(codeCommitID);
  const MapCommitID = useAppSelector(mapCommitID);
  const CodeCommitName = useAppSelector(codeCommitName);
  const MapCommitName = useAppSelector(mapCommitName);
  const dispatch = useAppDispatch();
  const [completeCodeHistory, setCodeHistory] = useState<CodeRevision[]>([]);
  const [completeMapHistory, setMapHistory] = useState<GameMapRevision[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const authApi = new AuthApi(apiConfig);
      authApi
        .getAuthStatus()
        .then(res => {
          const { status } = res;
          if (status === 'AUTHENTICATED') {
            if (localStorage.getItem('token') != null) {
              const codeApi = new CodeApi(apiConfig);
              codeApi
                .getCodeRevisions()
                .then(codeResp => setCodeHistory(codeResp))
                .catch(error => {
                  if (error instanceof ApiError) Toast.error(error.message);
                });

              const mapApi = new MapApi(apiConfig);
              mapApi
                .getMapRevisions()
                .then(mapResp => setMapHistory(mapResp))
                .catch(error => {
                  if (error instanceof ApiError) Toast.error(error.message);
                });
            }
          }
        })
        .catch((e: Error) => {
          if (e instanceof ApiError) {
            Toast.error(e.message);
          }
        });
    }
  }, [IsSelfMatchModalOpen]);

  function handleCodeCommitChange(selectedValue: string) {
    if (selectedValue === 'Current Code') {
      dispatch(codeCommitNameChanged('Current Code'));
      dispatch(codeCommitIDChanged(null));
    } else {
      const newCommit = completeCodeHistory.filter(
        codeCommit => codeCommit.message === selectedValue,
      );
      dispatch(codeCommitNameChanged(newCommit[0].message));
      dispatch(codeCommitIDChanged(newCommit[0].id));
    }
  }

  function handleMapCommitChange(selectedValue: string) {
    if (selectedValue === 'Current Map') {
      dispatch(mapCommitNameChanged('Current Map'));
      dispatch(mapCommitIDChanged(null));
    } else {
      const newCommit = completeMapHistory.filter(
        mapCommit => mapCommit.message === selectedValue,
      );
      dispatch(mapCommitNameChanged(newCommit[0].message));
      dispatch(mapCommitIDChanged(newCommit[0].id));
    }
  }

  function handleSimulate() {
    const matchAPI = new MatchApi(apiConfig);
    matchAPI
      .createMatch({
        mode: MatchMode.Self,
        codeRevisionId: CodeCommitID,
        mapRevisionId: MapCommitID,
      })
      .catch(error => {
        if (error instanceof ApiError) Toast.error(error.message);
      });
    dispatch(isSelfMatchModalOpened(false));
  }

  return (
    <Modal
      show={IsSelfMatchModalOpen}
      centered
      contentClassName={styles.content}
      onHide={() => dispatch(isSelfMatchModalOpened(false))}
    >
      <Modal.Header className={styles.selfMatchModalHeader}>
        <Modal.Title className={styles.headerText}>Self Match</Modal.Title>
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => dispatch(isSelfMatchModalOpened(false))}
        ></button>
      </Modal.Header>

      <Modal.Body className={styles.selfMatchModalBody}>
        <Container fluid>
          <Row>
            <Col xs={12} className={styles.selfMatchModalFormGroup}>
              <FormGroup controlId="codeCommitName">
                <div className={styles.selfMatchModalLabel}>
                  Code Commit Name
                </div>
                <select
                  className={styles.selfMatchModalDropdown}
                  value={CodeCommitName}
                  onChange={e => handleCodeCommitChange(e.target.value)}
                >
                  <option
                    value={'Current Code'}
                    key={'Current Code'}
                    className={styles.dropdownOptions}
                  >
                    Current Code
                  </option>
                  {completeCodeHistory.map(codeCommit => (
                    <option
                      value={codeCommit.message}
                      key={codeCommit.message}
                      className={styles.dropdownOptions}
                    >
                      {codeCommit.message}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={styles.selfMatchModalFormGroup}>
              <FormGroup controlId="mapCommitName">
                <div className={styles.selfMatchModalLabel}>
                  Map Commit Name
                </div>
                <select
                  className={styles.selfMatchModalDropdown}
                  value={MapCommitName}
                  onChange={e => handleMapCommitChange(e.target.value)}
                >
                  <option
                    value={'Current Map'}
                    key={'Current Map'}
                    className={styles.dropdownOptions}
                  >
                    Current Map
                  </option>
                  {completeMapHistory.map(mapCommit => (
                    <option
                      value={mapCommit.message}
                      key={mapCommit.message}
                      className={styles.dropdownOptions}
                    >
                      {mapCommit.message}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <div>
                <Button
                  className={styles.selfMatchModalSimulateBtn}
                  size="lg"
                  onClick={handleSimulate}
                  variant="outline-light"
                >
                  SIMULATE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default selfMatchModal;
