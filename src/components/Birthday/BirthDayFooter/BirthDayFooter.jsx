import { memo } from "react";
import React from "react";
import Form from "../Form/Form";
import { useTranslation } from "react-i18next";
import Firework from "../Firework/Firework";
function BirthDayFooter() {
  const { t, i18n } = useTranslation();

  return (
    <div className=" birthDay_footer">
      <div className="container">
        <div className="footer_content">
          <h1>{t("footertitle")}</h1>
          <Form />
        </div>
        <div className="Firework-bigPar">
          <div className="Firework-bigPar-child">
            <div className="firework-par1">
              <Firework />
            </div>
            <div className="firework-par2">
              <Firework />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BirthDayFooter);
