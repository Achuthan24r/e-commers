import { useTranslation } from "react-i18next";
import s from "./CopyRightsText.module.scss";

const CopyRightsText = () => {
  const developerProfile = "https://www.linkedin.com/in/m/l";
  const designerProfile = "https://dribbble.com/mdrimel15";
  const copyRightTrans = "footer.copyRightsText";
  const { t } = useTranslation();

  return (
    <p className={s.copyRights}>
      <span>{t(`${copyRightTrans}.designedBy`)}</span>
      <a href={designerProfile} target="_blank">
        Vishnu
      </a>

      <span>{t(`${copyRightTrans}.codedBy`)}</span>
      <a href={developerProfile} target="_blank">
        Achu
      </a>
    </p>
  );
};
export default CopyRightsText;
