import React, { memo } from 'react';
import './Wedding1Main.css';
import { mainBackground } from '../../../../images/images';
import Wedding1Main_info from '../Wedding1Main_info/Wedding1Main_info';

function Wedding1Main() {
  return (
    <main style={{ backgroundImage: `url(${mainBackground})` }}>
      <div className='container'>
        <div className='main'>
          <Wedding1Main_info/>
        </div>
      </div>
    </main>
  )
}

export default memo(Wedding1Main)