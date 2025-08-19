import { FaServer, FaCogs, FaKeyboard } from "react-icons/fa";
import styles from "./GetStarted.module.css";
import { useTranslation } from "react-i18next";
import type CardInterface from "../../../../types/common/CardInterface";

export const GetStarted = () => {
  const { t } = useTranslation();

  const cards: CardInterface[] = [
    {
      title: "deployLocally",
      description: "deployLocallyDescription",
      icon: <FaServer className={styles.icon} />,
    },
    {
      title: "configure",
      description: "configureDescription",
      icon: <FaCogs className={styles.icon} />,
    },
    {
      title: "integrate",
      description: "integrateDescription",
      icon: <FaKeyboard className={styles.icon} />,
    },
  ];

  return (
    <section className="px-4 mt-10 md:mt-14 text-center" id="get-started">
      <h2 className={styles.title}>{t("getStartedTitle")}</h2>
      <div className={styles.grid}>
        {cards.map((card, idx: number) => (
          <div className={styles.step}>
            {card.icon}
            <h3 className={styles.stepTitle}>
              {`${idx + 1}. ${t(card.title)}`}
            </h3>
            <p className={styles.stepText}>{t(card.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
