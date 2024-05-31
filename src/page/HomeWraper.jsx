import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function HomeWraper() {
  
  return (
    <div className="home_wraper">
      <Outlet />
    </div>
  );
}

export default HomeWraper;
