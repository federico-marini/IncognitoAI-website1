import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { t } = useTranslation();
  const CHAT_URL = import.meta.env.VITE_CHAT_URL;

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{t("heroSectionTitle")}</h1>
      <p className={styles.subtitle}>{t("heroSectionDescription")}</p>
      /*
      <div className="flex justify-center">
        <button
          onClick={() => (window.location.href = CHAT_URL)}
          className="cursor-pointer bg-gradient-to-r mt-8 from-green-500 to-lime-400 text-white px-6 py-2 rounded-md font-semibold text-xl shadow hover:-translate-y-1 transition-transform flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
        >
          {t("testDemo")}
        </button>
      </div>
      */
    </section>
  );
};
