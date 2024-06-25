import React, { memo, useEffect, useRef, useState } from 'react';
import './Wedding1Main_info.css';
import Wedding1Date from '../../Wedding1Date/Wedding1Date';
import Wedding1Event from '../Wedding1Event/Wedding1Event';
import Wedding1Church from '../Wedding1Church/Wedding1Church';
import Wedding1Registry from '../../Wedding1Registry/Wedding1Registry';
import Wedding1Bonquete from '../../Wedding1Bonquete/Wedding1Bonquete';
import { sectiosData } from '../../../../dataFolder/data';
import {useSelector } from 'react-redux';
import { selectProjectData } from '../../../../store/slices/GetProjectSlice/GetProjectSlice';
import { privateProjectLoading } from '../../../../store/slices/privateProjectSlice/privateProjectSlice';

function Wedding1Main_info() {
const respProjectData = useSelector(selectProjectData);
const loading = useSelector(privateProjectLoading)
  return (

    <div className='main_info'>
        <Wedding1Date/>
        {
           respProjectData?.data ?  respProjectData?.data?.sections.map((item, index) => {
              if (item.section_number === '2') {
                return (
                  <Wedding1Event key={index}  item={item}/>
                )
              }
              if (item.section_number === '3') {
                return (
                  <Wedding1Church key={index} item={item}/>
                )
              }
              if (item.section_number === '4') {
                return (
                  <Wedding1Registry key={index} item={item}/>
                )
              }
              if (item.section_number === '5') {
                return (
                  <Wedding1Bonquete key={index} item={item}/>
                )
              }
          }) : sectiosData.sections.map((item, index) => {
            if (item.section_number === '2') {
              return (
                <Wedding1Event key={index}  item={item}/>
              )
            }
            if (item.section_number === '3') {
              return (
                <Wedding1Church key={index} item={item}/>
              )
            }
            if (item.section_number === '4') {
              return (
                <Wedding1Registry key={index} item={item}/>
              )
            }
            if (item.section_number === '5') {
              return (
                <Wedding1Bonquete key={index} item={item}/>
              )
            }

            console.log(item,'hgcrdfgtyh');
        }) 
        }
    </div>
  )
}

export default memo(Wedding1Main_info)