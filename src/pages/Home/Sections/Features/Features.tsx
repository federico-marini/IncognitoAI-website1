import { FaShieldAlt, FaRobot , FaUserShield } from "react-icons/fa";
import styles from "./Features.module.css";
import { useTranslation } from "react-i18next";
import type CardInterface from "../../../../types/common/CardInterface";

export const Features = () => {
  const { t } = useTranslation();

  const cards: CardInterface[] = [
    {
      title: "security",
      description: "securityDescription",
      icon: <FaShieldAlt className={styles.icon} />,
    },
    {
      title: "multiLLMReady",
      description: "multiLLMReadyDescription",
      icon: <FaRobot className={styles.icon} />,
    },
    {
      title: "gdprCompliant",
      description: "gdprCompliantDescription",
      icon: <FaUserShield className={styles.icon} />,
    },
  ];

  return (
    <section className="px-4 mt-10 md:mt-12" id="features">
      <h2 className={styles.title}>{t("featuresSectionTitle")}</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div className={styles.card}>
            {card.icon}
            <h3 className={styles.cardTitle}>{t(card.title)}</h3>
            <p className={styles.cardText}>{t(card.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
