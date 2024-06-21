import React, { useEffect, useRef, useState } from 'react';
import './MusicModal.css';
import { playIcon, pauseIcon } from '../../iconsFolder/icons'; // Assume pauseIcon is also defined
import { audioData } from '../../dataFolder/data';
import { useDispatch, useSelector } from 'react-redux';
import { close, musicModalSelector, open } from '../../store/slices/MusicModalSlice/MusicModalSlice';
import { change, changeMusic } from '../../store/slices/ChangeInfoSlice/ChangeInfoSlice';

function MusicModal({langModal}) {
  const audioRefs = useRef([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);
  const musicModalIsopen = useSelector(musicModalSelector);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch()

  const playaudio = (index) => {
    if (selectedTrack !== null && selectedTrack !== index) {
      audioRefs.current[selectedTrack].pause();
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
    setSelectedTrack(index);

    if (isPlaying !== index) {
      setIsPlaying(null);
    }

    dispatch(changeMusic(track.src))
    dispatch(close())
    dispatch(change())
  };




  return (
    <div className='music-modal'>
      <div className='music-modal_content'>
        <h1 className='music-modal_title'>Ընտրեք երաժշտություն</h1>
        {audioData.map((track, index) => (
          <div key={track.id} className="button-container_music">
            <label className='button_musicc'>
              <audio
                controls
                ref={(el) => (audioRefs.current[index] = el)}
                style={{ display: 'none' }}
              >
                <source src={track.src} type="audio/mpeg" />
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
              <span className="button_music_name">Track {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicModal;
