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

      </div>
      */
    </section>
  );
};
