import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header, Section } from './index';

import './tikets.css';

const Tikets = () => {
   const { t, i18n } = useTranslation();
   return (
      <div>
         <div>
            <Header />
            <div>
               <Section />
            </div>
         </div>
      </div>
   );
};

export default React.memo(Tikets);
