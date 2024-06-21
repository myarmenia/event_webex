import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    changePromNightDate, 
    changePromNightTime, 
    selectDefaultData, 
    setEditStatusTemplate 
} from '../../../store/slices/Tikets/tiketsSlice';
import CustomBtnTikets2 from '../TicetsCustom/CustomBtnTikets2';
import Timer from '../../timer/Timer';
import { 
    wing1, 
    wing2, 
    wing3, 
    backgroundCenterBlock, 
    Showa 
} from '../../../images/TiketsImg';
import { 
    openModalPrivate 
} from '../../../store/slices/ModalPrivate/ModalPrivateSlice';
import { 
    openModalTiketsLeng, 
    tiketsLengModalSelector 
} from '../../../store/slices/TiketsLengModal/TiketsLengModalSlice';
import { sectiosData } from '../../../dataFolder/data';
import '../tikets.css';

const TiketsHeader = () => {
    const dispatch = useDispatch();
    const [headerTitle, setHeaderTitle] = useState({ name: 'PROM', lastName: ' NIGHT' });
    const [open, setOpen] = useState(false);
    
    const { statusTemplate, editStatusTemplate } = useSelector((state) => state.tikets);
    const tiketsLengModal = useSelector(tiketsLengModalSelector);
    const allInfoPromNight = useSelector(selectDefaultData);
    const [promNightDate, setPromNightDate] = useState(allInfoPromNight.date);
    const [promNightTime, setPromNightTime] = useState(allInfoPromNight.section_1_time);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 10000);
    }, []);

    useEffect(() => {
        dispatch(changePromNightDate(promNightDate));
    }, [dispatch, promNightDate]);

    useEffect(() => {
        dispatch(changePromNightTime(promNightTime));
    }, [dispatch, promNightTime]);

    useEffect(() => {
        if (tiketsLengModal === false && localStorage.getItem('langModalTiket') === 'true') {
            dispatch(setEditStatusTemplate(true));
        }

        setTimeout(() => {
            localStorage.removeItem('langModalTiket');
        }, 2000);
    }, [tiketsLengModal, dispatch]);

    return (
        <div className="tiketsHeader">
            <video className="tiketsHeader-background-video" autoPlay muted>
                <source src={'/backgroundVideo.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="tiketsHeader-blockButton">
                {!editStatusTemplate ? (
                    <CustomBtnTikets2
                        handleOpenLengModal={() => dispatch(openModalTiketsLeng(true))}
                        handleClick={() => dispatch(setEditStatusTemplate(true))}
                        btnText={'Edit'}
                    />
                ) : (
                    <CustomBtnTikets2 
                        btnText={'View'}  
                        handleOpenLengModal={() => dispatch(openModalTiketsLeng(true))} 
                        handleClick={() => dispatch(setEditStatusTemplate(false))} 
                        background="#c93789" 
                    />
                )}

                {allInfoPromNight.date && allInfoPromNight.feedback && (
                    <button 
                        className='fixed_button_prom_night_send' 
                        onClick={() => dispatch(openModalPrivate('promNight'))}
                    >
                        Send
                    </button>
                )}
            </div>
            <div className="tiketsHeader-imgBlockLeft">
                <img src={wing1} alt="" />
            </div>
            <div className="tiketsHeader-imgBlockRight">
                <img src={wing2} alt="" />
            </div>
            <div className="tiketsHeader-imgBlockBottom">
                <img src={wing3} alt="" />
            </div>
            <div style={{ display: open ? '' : 'none' }} className="container">
                <div className="tiketsHeader-blockCenter">
                    <div
                        className="tiketsHeader-blockCenter_nameBlock"
                        style={{ backgroundImage: `url(${backgroundCenterBlock})` }}
                    >
                        <div className="blockCenter_nameBlock-name">
                            <span className="blockCenter_nameBlock-name-minname">{headerTitle.name}</span>
                            <span className="blockCenter_nameBlock-name-bigName">
                                {headerTitle.lastName}
                            </span>
                        </div>
                        <div className="blockCenter_nameBlock-inptData">
                            {editStatusTemplate ? (
                                <input 
                                    type="time" 
                                    placeholder="JUNE 5 18:00" 
                                    value={promNightTime} 
                                    onChange={(e) => setPromNightTime(e.target.value)} 
                                />
                            ) : (
                                <p className='nameBlock-inptData-text'>
                                    {allInfoPromNight.section_1_time || sectiosData.sections[1]?.time || '18:00'}
                                </p>
                            )}
                            {editStatusTemplate ? (
                                <input 
                                    type="date" 
                                    placeholder="JUNE 5 18:00" 
                                    value={promNightDate} 
                                    onChange={(e) => setPromNightDate(e.target.value)} 
                                />
                            ) : (
                                <p className="nameBlock-inptData-text">
                                    {allInfoPromNight.date || '2024-10-12'}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="tiketsHeader-blockCenter_timeBlock">
                        <div style={{ backgroundImage: `url(${Showa})` }}>
                            <Timer liner={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TiketsHeader;
