import React, { useEffect } from 'react'
import './ModalPrivate.css'
import { rightIconArrow } from '../../iconsFolder/icons'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalPrivate, modalPrivateSelectorType } from '../../store/slices/ModalPrivate/ModalPrivateSlice'
import { selectDefaultData } from '../../store/slices/Tikets/tiketsSlice'
import { postPrivateProject } from '../../store/slices/privateProjectSlice/privateProjectApi'
import { allInfoSelector } from '../../store/slices/ChangeInfoSlice/ChangeInfoSlice'
import { selectProjectLoading } from '../../store/slices/GetProjectSlice/GetProjectSlice'
import { selectTariffData } from '../../store/slices/TarifData/TarifDataSlice'
import { getTarifData } from '../../store/slices/TarifData/TarifDataApi'
import { event } from 'jquery'

function ModalPrivate() {
    const dispatch = useDispatch()
    const allInfoPromNight = useSelector(selectDefaultData)
    const selectTypeModal = useSelector(modalPrivateSelectorType)
    const allInfo  = useSelector(allInfoSelector);
    const loadSpinner = useSelector(selectProjectLoading);
    const respTariffData = useSelector(selectTariffData)

    const tarifData = [
        {
            id: '1',
            name: 'Basic',
            price: '4950 AMD',
            desc: '1 invitation card',
            infoTitle: 'You can create one invitation that includes',
            infoText: '',
            infoItems: ['1. you will automatically create the appropriate one for you', '2. You will be able to quickly distribute invitations via Qr code', '3)  You will receive the guest list on the phone number you sent'],
        },
        {
            id: '2',
            name: 'Standart',
            price: '35000 AMD',
            desc: '3 months + 1 month free',
            infoTitle: 'You can create one invitation that include',
            infoText: ' As part of this package you will receive a code with which you will generate invitation cards as part of the package.',
            infoItems: ['1. you will automatically create the appropriate one for you', '2. You will be able to quickly distribute invitations via Qr code', '3)  You will receive the guest list on the phone number you sent'],

        },
        {
            id: '3',
            name: 'Premium',
            price: '73000 AMD',
            desc: '1 year + 3 months free',
            infoTitle: 'You can create one invitation that includes',
            infoText: ' As part of this package you will receive a code with which you will generate invitation cards as part of the package.',
            infoItems: ['1. you will automatically create the appropriate one for you', '2. You will be able to quickly distribute invitations via Qr code', '3)  You will receive the guest list on the phone number you sent'],

        }
    ]

    useEffect(() => {
        dispatch(getTarifData())
    },[])
    const privateProject = (e, promoCode, tariff_id) => {
        e.preventDefault()
        if (selectTypeModal === 'promNight') {
            if (allInfoPromNight.feedBack !== '' && allInfoPromNight.date !== '') {
                const resultObj = {
                    template_id: '2',
                    template_route: '/tikets',
                    date: allInfoPromNight.date,
                    feedback: allInfoPromNight.feedback,
                    invitation_name: allInfoPromNight.invitation_name,
                    ...(tariff_id && { tariff_id: tariff_id }),
                    ...(promoCode && { promo_code: promoCode }),
                    sections: [
                        {
                            section_number: 1,
                            ...(allInfoPromNight.section_1_time && { time: allInfoPromNight.section_1_time }),
                        },

                        {
                            section_number: 2,
                            ...(allInfoPromNight.section_2_text && { text: allInfoPromNight.section_2_text }),
                            ...(allInfoPromNight.section_2_addressLink && { address_link: allInfoPromNight.section_2_addressLink }),
                            ...(allInfoPromNight.section_2_images.length > 0 && { images: allInfoPromNight.section_2_images })
                        },

                        {
                            section_number: 3,
                            ...(allInfoPromNight.section_3_text && { text: allInfoPromNight.section_3_text }),
                            ...(allInfoPromNight.section_3_images.length > 0 && { images: allInfoPromNight.section_3_images })
                        },

                    ].filter(item => Object.keys(item).length !== 1),


                }

                dispatch(postPrivateProject(resultObj)).then((res) => {
                    if (res.payload.data) {
                         window.location.href = res.payload.data.redirect_url
                    }
                })

            }
        }
        else if(selectTypeModal === 'wedding1'){
            if (allInfo.feedBack !== '' && allInfo.date !== '') {
                const resultObj = {
                    template_id: '1',
                    template_route: '/wedding1',
                    date: allInfo.date,
                    sound_path: allInfo.music_path,
                    feedback: allInfo.feedback,
                    invitation_name: allInfo.nameBoy + '-' + allInfo.nameGirl,
                    ...(tariff_id && { tariff_id: tariff_id }),
                    ...(promoCode && { promo_code: promoCode }),
                    sections: [
                        {
                            section_number: 1,
                            ...(allInfo.nameBoy && { name_1: allInfo.nameBoy }),
                            ...(allInfo.nameGirl && { name_2: allInfo.nameGirl })
                        },
        
                        {   
                            section_number: 2,
                            ...(allInfo.eventTime && { time: allInfo.eventTime }),
                            ...(allInfo.eventText && { text: allInfo.eventText }),
                            ...(allInfo.eventAddres && { address: allInfo.eventAddres }),
                            ...(allInfo.event_addres_link && { address_link: allInfo.event_addres_link }),
                            ...(allInfo.event_imgs.length > 0 && { images: allInfo.event_imgs })
                        },
        
                        {
                            section_number: 3,
                            ...(allInfo.churchesTime && { time: allInfo.churchesTime }),
                            ...(allInfo.chrchesText && { text: allInfo.chrchesText }),
                            ...(allInfo.chrchesAddres && { address: allInfo.chrchesAddres }),
                            ...(allInfo.churches_addres_link && { address_link: allInfo.churches_addres_link }),
                            ...(allInfo.churches_imgs.length > 0 && { images: allInfo.churches_imgs })
                        },
        
                        {
                            section_number: 4,
                            ...(allInfo.registryTime && { time: allInfo.registryTime }),
                            ...(allInfo.registryText && { text: allInfo.registryText }),
                            ...(allInfo.registryAddres && { address: allInfo.registryAddres }),
                            ...(allInfo.registry_addres_link && { address_link: allInfo.registry_addres_link }),
                            ...(allInfo.registry_imgs.length > 0 && { images: allInfo.registry_imgs })
                        },
        
                        {
                            section_number: 5,
                            ...(allInfo.banquetTime && { time: allInfo.banquetTime }),
                            ...(allInfo.banquetText && { text: allInfo.banquetText }),
                            ...(allInfo.banquetAddres && { address: allInfo.banquetAddres }),
                            ...(allInfo.banquet_addres_link && { address_link: allInfo.banquet_addres_link }),
                            ...(allInfo.banquet_imgs.length > 0 && { images: allInfo.banquet_imgs })
                        }
                    ].filter(item => Object.keys(item).length !== 1),
                      
        
                }
                
              dispatch(postPrivateProject(resultObj)).then((res) => {
               if (res.payload.data) {
                 window.location.href = res.payload.data.redirect_url
               }
              })
              
            }
        }
    }

    return (
        <div className='modal_private'>
            <div className='modal_private_block'>
                <span className='modal_private_block_close' onClick={() => dispatch(closeModalPrivate('promNight'))}>X</span>
                <div className="modal_private_block_top">
                    <h3>Enter the promo code</h3>
                    <p>A word or set of letters and numbers that you can use to get a discount</p>

                    <div className='modal_private_block_top_input'>
                        <form className='modal_private_block_top_input_div' onSubmit={(e) => privateProject(e, e.target[0].value,null)}>
                            <span>promo code/coupon</span>
                            <div className='modal_private_block_top_input_div_input'>
                                <input type="text" placeholder='FRN3' />
                                <button>{rightIconArrow}</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="modal_private_block_bottom">
                    {
                        respTariffData?.data.map(el => (
                            <div className='modal_private_block_bottom_item' key={el.id}>
                                <div className='modal_private_block_bottom_item_top'>
                                    <h3>{el.desc}</h3>
                                    <span className='modal_private_block_bottom_item_top_price'>{el.price}</span>
                                </div>
                                <span className='modal_private_block_bottom_item_top_info_title'>{el.info_title}</span>
                                <div>
                                    <span className='modal_private_block_bottom_item_info_text'>{el.info_text}</span>
                                    <ul className='modal_private_block_bottom_item_info_list'>
                                        {
                                            el.info_items.map(item => (
                                                <li key={item}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <button className='modal_private_block_bottom_item_btn' onClick={(e) => privateProject(e, null, el.id)}>Pay</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalPrivate