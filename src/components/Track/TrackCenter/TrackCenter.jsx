import React from 'react';
import {
    PlayerCenter,
    PlayerCenterButtonsContainer,
    PlayIconWrapper,
} from './trackCenterStyles';
import Duration from '../../TrackControls/Duration';
import { ReactComponent as PlayIconSvg } from '../../../assets/icons/play.svg';
import { ReactComponent as PauseIconSvg } from '../../../assets/icons/pause.svg';

const TrackCenter = React.forwardRef(
    (
        { isPlaying, handleAudio, song, list, timeElapsed, setTimeElapsed },
        ref
    ) => {
        return (
            <PlayerCenter>
                <PlayerCenterButtonsContainer>
                    <PlayIconWrapper onClick={handleAudio}>
                        {!isPlaying ? (
                            <PlayIconSvg
                                fill="#1d1b1a"
                                height="14"
                                width="14"
                            />
                        ) : (
                            <PauseIconSvg
                                fill="#1d1b1a"
                                height="14"
                                width="14"
                            />
                        )}
                    </PlayIconWrapper>
                </PlayerCenterButtonsContainer>

                <Duration
                    timeElapsed={timeElapsed}
                    setTimeElapsed={setTimeElapsed}
                    isPlaying={isPlaying}
                    songId={song?.id}
                    songList={list}
                    ref={ref}
                />
            </PlayerCenter>
        );
    }
);

export default TrackCenter;
