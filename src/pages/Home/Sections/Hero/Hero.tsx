import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  const handleDemoRequest = () => {
    const isItalian = i18n.language === 'it';
    
    const subject = isItalian ? 'Richiesta Demo IncognitoAI' : 'IncognitoAI Demo Request';
    
    const body = isItalian 
      ? 'Salve,\n\nvorrei richiedere una demo di IncognitoAI.\n\nVi prego di farmi sapere come procedere.\n\nGrazie.'
      : 'Hello,\n\nI would like to request a demo of IncognitoAI.\n\nPlease let me know how to proceed.\n\nThank you.';
    
    const mailtoLink = `mailto:info@incognitoai.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{t("heroSectionTitle")}</h1>
      <p className={styles.subtitle}>{t("heroSectionDescription")}</p>
      <div className="flex justify-center">
        <button
          onClick={handleDemoRequest}
          className="cursor-pointer bg-gradient-to-r mt-8 from-green-500 to-lime-400 text-white px-6 py-2 rounded-md font-semibold text-xl shadow hover:-translate-y-1 transition-transform flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
        >
          {t("testDemo")}
        </button>
      </div>
    </section>
  );
};
