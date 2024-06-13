import React, { memo, useEffect, useRef, useState } from 'react';
import './Wedding1Music.css';
import { useDispatch, useSelector } from 'react-redux';
import { musicModalSelector, open } from '../../../../store/slices/MusicModalSlice/MusicModalSlice';
import { changeInfoSelector } from '../../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { selectProjectData } from '../../../../store/slices/GetProjectSlice/GetProjectSlice';
import { customBasesUrlFunc } from '../../../../utils/helperFunck';

function Wedding1Music() {
  const audioRef = useRef(null);
  const musicModalIsopen = useSelector(musicModalSelector);
  const dispatch = useDispatch()
  const changeInfoState = useSelector(changeInfoSelector);
  const respProjectData = useSelector(selectProjectData);
  const params = customBasesUrlFunc()
  const [path, setPath] = useState(null)


  const playaudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else audioRef.current.pause()
  }
 

  // useEffect(() => {
  //   console.log(respProjectData.data?.data?.sound_path, 'useeffect8888888888888888888888');
  //   let localPath = respProjectData.data?.data?.sound_path ? '../../../../../audio/' + respProjectData.data?.data?.sound_path : null;
  //   const f = () => {
  //     if(localPath === '../../../../audio/Christina Perri feat. Steve Kazee - A Thousand Years (Part 2).mp3'){
  //       setPath('../../../../audio/Christina Perri feat. Steve Kazee - A Thousand Years (Part 2).mp3')
  //     }
  //     else if(localPath === '../../../../audio/my-love_short-177579'){
  //       setPath('../../../../audio/my-love_short-177579')
    
  //     }
  //   }
  //   f()
  // }, [respProjectData.data.data]);
  return (
    <>
      {changeInfoState === "view" ? (
      <div className="button-container_music" onClick={playaudio}>
      <audio controls ref={audioRef} style={{ display: 'none' }}>
        
        { 
         params.token && respProjectData.data.data?.sound_path  && <source  src={ require(`../../../../audio/${respProjectData.data?.data?.sound_path}`)}type="audio/mpeg" />
        }

        {
          !params.token && !respProjectData.data.data?.sound_path && <source  src={ require(`../../../../audio/Christina Perri feat. Steve Kazee - A Thousand Years (Part 2).mp3`)}type="audio/mpeg" />
        }


          {/* <source  src={path} type="audio/mpeg"/> */}
        
      </audio>
      <a className="button_music">
        <div className="note"></div>
      </a>
    </div>
    )
      :
      <a className="button_music" onClick={() =>dispatch(open())}>
          <div className="note"></div>
      </a>}
    </>
  )
}

export default memo(Wedding1Music)