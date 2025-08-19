import type Language from "../../../../types/common/Language";
import styles from "./LanguageSwitcher.module.css";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages: Language[] = [
    { code: "en", label: "EN", ariaLabel: "switchToEnglish" },
    { code: "it", label: "IT", ariaLabel: "switchToItalian" },
  ];

  return (
    <div className={styles.languageSwitcher}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          disabled={i18n.language === lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={
            i18n.language === lang.code
              ? `${styles.button} ${styles.buttonActive}`
              : styles.button
          }
          aria-label={t(lang.ariaLabel)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
export default LanguageSwitcher;
