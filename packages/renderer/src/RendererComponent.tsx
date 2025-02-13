import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCompress,
  faExpand,
  faMinus,
  faPause,
  faPlay,
  faPlus,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import ReactFullscreen from 'react-easyfullscreen';
import { events, RendererEvents } from './events/EventEmitter';
import { Parameters } from './Parameters';
import { Renderer } from './Renderer';

const RendererLayer = createComponent(React, 'cc-renderer', Renderer);

const StatsText = ({ shouldShowStats }: { shouldShowStats: boolean }) => {
  const [turns, setTurns] = React.useState(0);
  const [coins, setCoins] = React.useState(0);
  const [destruction, setDestruction] = React.useState(0);

  React.useEffect(() => {
    const onCoinsUpdated = (coins: number) => {
      setCoins(coins);
      events.removeAllListeners(RendererEvents.CHANGE_COINS);
      events.once(RendererEvents.CHANGE_COINS, onCoinsUpdated);
    };
    events.once(RendererEvents.CHANGE_COINS, onCoinsUpdated);
  }, [coins]);

  React.useEffect(() => {
    const onTurnsUpdated = (turns: number) => {
      setTurns(turns);
      events.removeAllListeners(RendererEvents.NEXT_TURN);
      events.once(RendererEvents.NEXT_TURN, onTurnsUpdated);
    };
    events.once(RendererEvents.NEXT_TURN, onTurnsUpdated);
  }, [turns]);

  React.useEffect(() => {
    const onDestructionUpdated = (destruction: number) => {
      setDestruction(destruction);
      events.removeAllListeners(RendererEvents.CHANGE_DESTRUCTION);
      events.once(RendererEvents.CHANGE_DESTRUCTION, onDestructionUpdated);
    };
    events.once(RendererEvents.CHANGE_DESTRUCTION, onDestructionUpdated);
  }, [destruction]);

  return shouldShowStats ? (
    <p
      style={{
        textAlign: 'right',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '1rem',
        padding: '1rem',
      }}
    >
      Turn : {String(turns).padStart(8, '\xa0')}
      <br />
      Coins : {String(coins).padStart(8, '\xa0')}
      <br />
      Destruction : {String(destruction.toFixed(2)).padStart(6, '\xa0')} %
    </p>
  ) : (
    <p
      style={{
        textAlign: 'right',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '1rem',
        padding: '1rem',
      }}
    >
      Turn : {String(turns).padStart(8, '\xa0')}
      <br />
    </p>
  );
};

export default function RendererComponent({
  shouldShowStats,
}: {
  shouldShowStats?: boolean;
}): JSX.Element {
  const [isPaused, setPaused] = React.useState(false);
  const [isFullscreen, setFullscreen] = React.useState(false);

  React.useEffect(() => {
    const onResetUi = () => {
      setPaused(false);
      events.removeAllListeners(RendererEvents.RESET_UI);
      events.once(RendererEvents.RESET_UI, onResetUi);
    };
    events.once(RendererEvents.RESET_UI, onResetUi);
  }, [isPaused]);

  return (
    <ReactFullscreen>
      {({ onRequest, onExit }) => (
        <>
          <ButtonToolbar
            className="justify-content-between"
            style={{
              position: 'absolute',
              padding: '1rem 3rem',
              width: '100%',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            <ButtonGroup style={{ pointerEvents: 'auto' }}>
              <Button
                key="play-pause"
                variant="outline-light"
                onClick={() => {
                  if (isPaused) {
                    setPaused(false);
                    events.emit(RendererEvents.RESUME);
                  } else {
                    setPaused(true);
                    events.emit(RendererEvents.PAUSE);
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={(isPaused ? faPlay : faPause) as IconProp}
                />
              </Button>
              <Button
                key="speed-up"
                variant="outline-light"
                onClick={() => {
                  Parameters.timePerTurn = Math.max(
                    100,
                    Parameters.timePerTurn / 1.2,
                  );
                }}
              >
                <FontAwesomeIcon icon={faPlus as IconProp} />
              </Button>
              <Button
                key="slow-down"
                variant="outline-light"
                onClick={() => {
                  Parameters.timePerTurn *= 1.2;
                }}
              >
                <FontAwesomeIcon icon={faMinus as IconProp} />
              </Button>
              <Button
                key="reset"
                variant="outline-light"
                onClick={() => {
                  events.emit(RendererEvents.RESET);
                  setPaused(false);
                }}
              >
                <FontAwesomeIcon icon={faRedo as IconProp} />
              </Button>
              <Button
                key="full-screen"
                variant="outline-light"
                onClick={() => {
                  if (isFullscreen) {
                    setFullscreen(false);
                    onExit();
                  } else {
                    setFullscreen(true);
                    onRequest();
                  }
                }}
              >
                {isFullscreen ? (
                  <FontAwesomeIcon icon={faCompress as IconProp} />
                ) : (
                  <FontAwesomeIcon icon={faExpand as IconProp} />
                )}
              </Button>
            </ButtonGroup>
            <StatsText shouldShowStats={shouldShowStats ?? true} />
          </ButtonToolbar>
          <RendererLayer />
        </>
      )}
    </ReactFullscreen>
  );
}
