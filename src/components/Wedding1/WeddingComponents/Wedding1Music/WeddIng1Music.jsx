import React, { memo, useRef } from 'react';
import './Wedding1Music.css';
import { useDispatch, useSelector } from 'react-redux';
import { musicModalSelector, open } from '../../../../store/slices/MusicModalSlice/MusicModalSlice';

function Wedding1Music() {
  const audioRef = useRef(null);
  const musicModalIsopen = useSelector(musicModalSelector);
  const dispatch = useDispatch()

  const playaudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else audioRef.current.pause()
  }
  return (
    // <div className="button-container_music" onClick={playaudio}>
    //   <audio controls ref={audioRef} style={{ display: 'none' }}>
    //     <source src={require('../../../../audio/Christina Perri feat. Steve Kazee - A Thousand Years (Part 2).mp3')} type="audio/mpeg" />
    //   </audio>
    //   <a className="button_music">
    //     <div className="note"></div>
    //   </a>
    // </div>

      <a className="button_music" onClick={() =>dispatch(open())}>
          <div className="note"></div>
      </a>
  )
}

export default memo(Wedding1Music)