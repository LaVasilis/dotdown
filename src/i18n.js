import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import WorkWithUs from "./WorkWithUs";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        artists: "Artists",
        WorkWithUs: "Work With Us",
        about: "About",
        contact: "Contact",
        News: "News",
      },
      home: {
        title: "Become a part of music",
        subtitle: "Lets collab and make the music world much better.",
        
      },
     workWithUs: {
        title: "Work With Our Studio",
        text:
          "Join our creative team and collaborate on exciting new projects. We’re looking for talented, passionate individuals to grow with us. At DotDown The Label, we believe the best work happens when creative minds come together. We’re always open to partnering with artists, brands, studios, and creators who share our passion for innovation, quality, and unique storytelling. Whether you’re looking to develop a visual concept, produce high-end digital content, enhance your brand identity",
        FirstCheck: "Professional Studio Environment",
        SecondCheck:"High-end Creative Projects",
        ThirdCheck:"Flexible Work Opportunities",
        FourthCheck:"Career Growth & Mentorship",
        },
      },
  },
  el: {
    translation: {
      nav: {
        home: "Αρχική",
        artists: "Καλλιτέχνες",
        WorkWithUs: "Συνεργασια",
        about: "Σχετικά",
        contact: "Επικοινωνία",
        News:"Νέα",
          },
      home: {
        title: "Γινε κομματι της μουσικης",
        subtitle: "Ας συνεργαστουμε και ας κανουμε το κοσμο της μουσικης καλυτερο.",
      },
      workWithUs: {
      title: "Δούλεψε Με Το Studio Μας",
      text:
      "Γίνε μέλος της δημιουργικής μας ομάδας και συνεργάσου σε νέα, συναρπαστικά projects.Αναζητούμε ταλαντούχους και παθιασμένους ανθρώπους που θέλουν να εξελιχθούν μαζί μας. Στο DotDown The Label, πιστεύουμε πως η καλύτερη δουλειά γίνεται όταν δημιουργικά μυαλά ενώνονται. Είμαστε πάντα ανοιχτοί σε συνεργασίες με καλλιτέχνες, brands, studios και δημιουργούς που μοιράζονται το πάθος μας για καινοτομία, ποιότητα και μοναδική αφήγηση. Είτε θέλεις να αναπτύξεις ένα visual concept, να δημιουργήσεις high-end digital περιεχόμενο, είτε να ενισχύσεις την ταυτότητα του brand σου",
      FirstCheck: "Επαγγελματικό Περιβάλλον Studio",
      SecondCheck: "High-end Δημιουργικά Projects",
      ThirdCheck: "Ευέλικτες Ευκαιρίες Εργασίας",
      FourthCheck: "Επαγγελματική Ανάπτυξη & Mentorship",
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