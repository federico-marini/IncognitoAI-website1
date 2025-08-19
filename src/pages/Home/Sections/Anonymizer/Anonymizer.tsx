import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./Anonymizer.module.css";

export const Anonymizer = () => {
  const { t } = useTranslation();

  const [showAnonymized, setShowAnonymized] = useState<boolean>(false);

  const anonymizeText = async () => {
    setShowAnonymized(true);
  };

  return (
    <section className="container mx-auto px-4 mt-4 text-center">
      <h2 className={styles.title}>{t("howItWorks")}</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-6">
        {/** Original Prompt */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-2">
          <h3 className="text-left text-sm font-semibold text-gray-400">
            {t("originalPrompt")}
          </h3>
          <textarea
            className="bg-white/5 w-full p-6 rounded-xl min-h-[180px] font-mono text-white border border-white/10 shadow"
            placeholder={t("enterPromptPlaceholder")}
            value={t("samplePlainPrompt")}
            readOnly
          />
        </div>

        {/** Anonymized Prompt */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-2">
          <h3 className="text-left text-sm font-semibold text-gray-400">
            {t("anonymizedPrompt")}
          </h3>
          <textarea
            className="bg-white/5 w-full p-6 rounded-xl min-h-[180px] font-mono text-white border border-white/10 shadow"
            placeholder={t("anonymizedPromptPlaceholder")}
            value={showAnonymized ? t("sampleAnonymizedPrompt") : ""}
            readOnly
          />
        </div>
      </div>

      {/** Button */}
      <div className="flex justify-center">
        <button
          onClick={anonymizeText}
          className="cursor-pointer bg-gradient-to-r from-green-500 to-lime-400 text-white px-6 py-2 rounded-md font-semibold text-lg shadow hover:-translate-y-1 transition-transform flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
        >
          {t("anonymize")}
        </button>
      </div>
    </section>
  );
};
