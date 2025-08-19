import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`mt-5 md:mt-10 ${styles.footer}`}>
      <div id="contact" className={styles.container}>
        <p>
          <a href="mailto:info@incognitoai.it" className={styles.email}>
            📧 info@incognitoai.it
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
