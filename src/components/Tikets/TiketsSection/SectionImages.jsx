import React from 'react';

const SectionImages = ({ defaultImagesList, item }) => {
   return (
      <div className="TiketsSection-blockLeft-blockImg">
         {defaultImagesList.map((el, idx) => (
            <div key={idx} style={{ backgroundImage: `url(${el})` }}>
               {/* <img src={el} alt="default img" /> */}
            </div>
         ))}
      </div>
   );
};

export default SectionImages;
