import English from "./locale/en.json";
import Spanish from "./locale/es.json";
import Japanese from "./locale/jp.json";

export const getTranslations = (langCode: string) => {
  const lang =
    langCode === "en" ? English : langCode === "es" ? Spanish : Japanese;
  return lang;
};

export const localize = (langCode: string, phraseKey: string) => {
  const lang = getTranslations(langCode);
  return lang[phraseKey];
};
