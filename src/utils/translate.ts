import { setCORS } from 'google-translate-api-browser';
import { useTranslation } from 'react-i18next';
const translate = setCORS('https://cors-anywhere.herokuapp.com/');

export const translateText = async (text: string | null, lang: string) => {
  if (text) {
    try {
      const description = await translate(text, { to: lang });
      text = description.text;
    } catch (err) { }
  }
  return text;
};
