import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { convertToBase64 } from '../../../utils/helperFunck';
import { changePromNight_imgs_section_2 } from '../../../store/slices/Tikets/tiketsSlice';
import { galeriaIcon } from '../../../iconsFolder/icons';

function OneImage({item, methodDispatch}) {
    const dispatch = useDispatch()
    const [file, setFile] = useState(null);
    const { statusTemplate, editStatusTemplate } = useSelector((state) => state.tikets);
     
 
    const handleChange = (e) => {
       convertToBase64(e.target.files[0]).then((base64) => {
          setFile(base64)
          
      })
    };
 
    useEffect(() => {
       file && dispatch(methodDispatch(file));
     }, [file, dispatch]);

    return (
        <div className='one_img'>
            <img src={file ? file : (item?.path || item)} alt="default img" />
            {editStatusTemplate && <div className="download_div_imgs">
                <label>
                    <div className='galeria_icon'>{galeriaIcon}</div>
                    <input style={{ display: 'none' }} type="file" onChange={handleChange} />
                </label>
            </div>}
        </div>
    )
}

export default OneImage