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
        title: "Welcome to Our Website",
        subtitle: "This is a classic home page built with React.",
        
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
        title: "Καλώς ήρθες στην ιστοσελίδα μας",
        subtitle: "Αυτή είναι μια κλασική αρχική σελίδα με React.",
        
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