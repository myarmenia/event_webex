import React, { useRef, useState } from 'react';
import './MusicModal.css';
import { playIcon, pauseIcon } from '../../iconsFolder/icons'; // Assume pauseIcon is also defined
import { audioData } from '../../dataFolder/data';
import { useDispatch, useSelector } from 'react-redux';
import { close, musicModalSelector } from '../../store/slices/MusicModalSlice/MusicModalSlice';
import { change, changeMusic } from '../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useTranslation } from 'react-i18next';

function MusicModal({ langModal }) {
  const audioRefs = useRef([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);
  const musicModalIsOpen = useSelector(musicModalSelector);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const playaudio = (index) => {
    if (isPlaying !== null && isPlaying !== index) {
      audioRefs.current[isPlaying].pause();
    }

    if (audioRefs.current[index].paused) {
      audioRefs.current[index].play();
      setIsPlaying(index);
    } else {
      audioRefs.current[index].pause();
      setIsPlaying(null);
    }
  };

  const handleRadioChange = (track, index) => {
    if (isPlaying !== null && isPlaying !== index) {
      audioRefs.current[isPlaying].pause();
      setIsPlaying(null);
    }

    setSelectedTrack(index);
    dispatch(changeMusic(track.src));
    dispatch(close());
    dispatch(change());
  };

  return (
    <div className='music-modal'>
      <div className='music-modal_content'>
        <h1 className='music-modal_title'>{t('musicModalTitle')}</h1>
        {audioData.map((track, index) => (
          <div key={track.id} className="button-container_music">
            <label className='button_musicc'>
              <audio
                controls
                ref={(el) => (audioRefs.current[index] = el)}
                style={{ display: 'none' }}
              >
                <source src={require(`../../audio/${track.src}`)} type="audio/mpeg" />
              </audio>
              <div className="button_music_play_div">
                <input
                  type="radio"
                  name="track"
                  value={index}
                  checked={selectedTrack === index}
                  onChange={(e) => handleRadioChange(track, index)}
                />
              </div>
            </label>
            <div className='button_music_controls'>
              <span className='button_music_play' onClick={() => playaudio(index)}>
                {isPlaying === index ? pauseIcon : playIcon}
              </span>
              <span className="button_music_name">{track.track}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicModal;
