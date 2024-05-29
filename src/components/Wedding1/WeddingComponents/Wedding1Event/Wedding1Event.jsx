import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allInfoSelector, changeInfoEvent_imgs, changeInfoEventAddres, changeInfoEventText, changeInfoEventTime, changeInfoSelector } from '../../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useTranslation } from 'react-i18next';
import { editIcon, ringsWedding } from '../../../../iconsFolder/icons';
import { imageCouple } from '../../../../images/images';
import { openLinkModal } from '../../../../store/slices/LinkModalSlice/LinkModalSlice';

function Wedding1Event({ item }) {
    const [eventItem, setEventItem] = useState(false);
    const eventRef = useRef(null);
    const { t, i18n } = useTranslation();
    const allInfo = useSelector(allInfoSelector);
    const changeInfoState = useSelector(changeInfoSelector);
    const [event1Text, setEvent1Text] = useState(allInfo.eventText)
    const [eventTime, setEventTime] = useState(allInfo.eventTime)
    const [eventAddres, setEventAddress] = useState(allInfo.eventTime)
    const [file, setFile] = useState('');
    const dispatch = useDispatch();



    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (eventRef.current) {
                if (offset > eventRef.current.offsetTop - 500) {
                    setEventItem(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        dispatch(changeInfoEventText(event1Text))
    }, [event1Text])

    useEffect(() => {
        dispatch(changeInfoEventTime(eventTime))
    }, [eventTime])

    useEffect(() => {
        dispatch(changeInfoEventAddres(eventAddres))
    }, [eventAddres])


    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    useEffect(() => {
        file && dispatch(changeInfoEvent_imgs(file));
      }, [file, dispatch]);

    return (
        <div className='event' ref={eventRef}>
            {
                eventItem &&
                <div className='image_marriage right'>
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
            {
                eventItem &&
                <div className='marriage_text left'>
                    <span className='icon_marriage_ring'>{ringsWedding}</span>
                    <div className='about'>
                        <span className='marriage_title'>{t('party.0')}</span>
                        {changeInfoState === 'edit' ? <input type="time" className='time_inp event_inp' value={allInfo?.eventTime} onChange={(e) => setEventTime(e.target.value)} placeholder='Ժամ' /> : <span>{allInfo?.eventTime || item.time}</span>}
                        {changeInfoState === 'edit' ? <input type="text" className='text_inp event_inp' value={allInfo?.eventText} onChange={(e) => setEvent1Text(e.target.value)} placeholder='Տեքս' /> : <span>{allInfo?.eventText || item.text}</span>}
                        {changeInfoState === 'edit' ? <input type="text" className='address_inp event_inp' value={allInfo?.eventAddres} onChange={(e) => setEventAddress(e.target.value)} placeholder='Հասցե' /> : <span>{allInfo?.eventAddres || item.address}</span>}
                    </div>
                    <a href={item.address_link} target='_blank'>
                        <button className='get odd' onClick={() => dispatch(openLinkModal('event'))}>{t('party.2')}</button>
                    </a>
                </div>
            }
        </div>
    )
}

export default Wedding1Event