import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";
import logo from "/logo.svg";

const Header = () => {
  const { t } = useTranslation();

  const handleDocumentationClick = () => {
    window.open("https://jovial-sawine-39648a.netlify.app", "_blank", "noopener,noreferrer");
  };

  return (
    <header className={styles.header}>
      <nav
        className="container mx-auto px-4 py-3 flex justify-between items-center"
        style={{ maxWidth: "1200px" }}
      >
        <div className={styles.logoWrapper}>
          <img src={logo} alt="IncognitoAI logo" className={styles.logoImg} />
          <span className={styles.logoText}>IncognitoAI</span>
        </div>

        <div className="flex items-center space-x-6">
          {/* Nav desktop */}
          <div className={`${styles.navLinks} hidden md:flex`}>
            <button 
              onClick={handleDocumentationClick}
              className={styles.navLink}
            >
              {t("documentation")}
            </button>
            <a href="#get-started" className={styles.navLink}>
              {t("getStarted")}
            </a>
            <a href="#contact" className={styles.navLink}>
              {t("contact")}
            </a>
          </div>

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
};

export default Header;
