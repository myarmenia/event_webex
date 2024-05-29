import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { allInfoSelector, changeInfoBanquet_imgs, changeInfoBanquetAddres, changeInfoBanquetText, changeInfoBanquetTime, changeInfoSelector } from '../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { cake, imageBride } from '../../../images/images';
import { openLinkModal } from '../../../store/slices/LinkModalSlice/LinkModalSlice';
import { editIcon } from '../../../iconsFolder/icons';

function Wedding1Bonquete({ item }) {
  const { t, i18n } = useTranslation();
  const [banquetItem, setBanquetItem] = useState(false);
  const [banquetTime, setBanquetTime] = useState('');
  const [banquetText, setBanquetText] = useState('');
  const [banquetAddress, setBanquetAddress] = useState('');
  const [banquetAddressLink, setBanquetAddressLink] = useState('');
  const [file, setFile] = useState('');
  const banquetRef = useRef(null);
  const allInfo = useSelector(allInfoSelector);
  const changeInfoState = useSelector(changeInfoSelector);
  const dispatch = useDispatch();


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (banquetRef.current && offset > banquetRef.current.offsetTop - 500) {
        setBanquetItem(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    dispatch(changeInfoBanquetTime(banquetTime));
  }, [banquetTime]);


  useEffect(() => {
    dispatch(changeInfoBanquetText(banquetText));
  }, [banquetText])

  useEffect(() => {
    dispatch(changeInfoBanquetAddres(banquetAddress));
  }, [banquetAddress]);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    file && dispatch(changeInfoBanquet_imgs(file));
  }, [file, dispatch]);



  return (
    <div className='banquet' ref={banquetRef}>
      {
        banquetItem &&
        <div className='marriage_text right'>
          <div className='image_cake' >
            <img src={cake} alt="not found" />
          </div>
          <div className='about'>
            <span className='marriage_title'>{t('restaurant.0')}</span>
            {/* <span>{item.time}</span>
              <span>{item.text}</span>
              <span>{item.address}</span> */}
            {changeInfoState === 'edit' ? <input type="time" value={allInfo.banquetTime} placeholder='Ժամ' className='event_inp' onChange={(e) => setBanquetTime(e.target.value)} /> : <span>{allInfo.banquetTime || item.time}</span>}
            {changeInfoState === 'edit' ? <input type="text" value={allInfo.banquetText} placeholder='Տեքստ' className='event_inp' onChange={(e) => setBanquetText(e.target.value)} /> : <span>{allInfo.banquetText || item.text}</span>}
            {changeInfoState === 'edit' ? <input type="text" value={allInfo.banquetAddres} placeholder='Հասցե' className='event_inp' onChange={(e) => setBanquetAddress(e.target.value)} /> : <span>{allInfo.banquetAddres || item.address}</span>}
          </div>
          <a href={item.address_link} target='_blank'>
            <button className='get even' onClick={() => dispatch(openLinkModal('banquet'))}>{t('restaurant.3')}</button>
          </a>
        </div>
      }
      {
        banquetItem &&
        <div className='image_marriage left'>
          {changeInfoState === 'edit' && <label onChange={(e) => handleChange(e)}>
            <input style={{ display: 'none' }} type="file" />
            <span className='wedding1_edite_image'>{editIcon}</span>
          </label>}
          {
            item.images.map((img, index) => {
              return <img key={index} src={(changeInfoState === 'view' && file) || img} alt="not found" />
            })
          }
        </div>
      }
    </div>
  )
}

export default Wedding1Bonquete