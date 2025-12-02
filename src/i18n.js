import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        artists: "Artists",
        about: "About",
        contact: "Contact",
      },
      home: {
        title: "Become a part of music",
        subtitle: "Lets collab and make the music world much better.",
        
      },
    },
  },
  el: {
    translation: {
      nav: {
        home: "Αρχική",
        artists: "Καλλιτέχνες",
        about: "Σχετικά",
        contact: "Επικοινωνία",
      },
      home: {
        title: "Γινε κομματι της μουσικης",
        subtitle: "Ας συνεργαστουμε και ας κανουμε το κοσμο της μουσικης καλυτερο.",
        
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",          
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;