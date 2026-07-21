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
        form: {
          name: "Full Name",
          email: "Email",
          phone: "Phone Number",
          message: "How Can We Help You?",
          submit: "Submit",
          sending: "Sending...",
          success: "Thanks! Your message has been sent.",
          error: "Something went wrong. Please try again.",
        },
        },
        artistsPage: {
          title: "Members",
          moreInfo: "More Info",
          tags: {
            rapper: "Rapper",
            producer: "Producer",
            band: "Band",
          },
          members: {
            sapiens: {
              name: "SAPIENS",
              preview:
                "Sapiens is a rapper, beatmaker, and founding member of DotDown. He began his recording career in 2021 as a founding member of Unity, alongside Diky and Tay, contributing as a rapper and beatmaker to the EP Pages of War. He then released his solo project “Pre-Season,” in collaboration with producer Nezzz, expanding his artistic signature both lyrically and in terms of production. He is also a rapper with Baropasso, with whom he has released the single “Robin Hood,” the album “Bacteria,” and the single “Paliopaida” featuring Taki Tsan. With numerous live performances under his belt, both with Unity and Baro Passo, Sapiens continues to champion hip hop through a combination of lyrical expression and music production, forming an integral part of DotDown’s creative identity.",
              fullInfo:
                "Sapiens is a rapper, beatmaker, and founding member of DotDown. He began his recording career in 2021 as a founding member of Unity, alongside Diky and Tay, contributing as a rapper and beatmaker to the EP Pages of War. He then released his solo project “Pre-Season,” in collaboration with producer Nezzz, expanding his artistic signature both lyrically and in terms of production. He is also a rapper with Baropasso, with whom he has released the single “Robin Hood,” the album “Bacteria,” and the single “Paliopaida” featuring Taki Tsan. With numerous live performances under his belt, both with Unity and Baro Passo, Sapiens continues to champion hip hop through a combination of lyrical expression and music production, forming an integral part of DotDown’s creative identity.",
            },
            tay: {
              name: "TAY",
              preview:
                "Tay is a rapper, a founding member of DotDown, and a rapper with Baro Passo. He began his recording career in 2021 as a member of Unity, alongside Diky and Sapiens, appearing on the EP “Pages of War,” which marked his first official release. In 2026, he released his solo EP “Navajo,” in collaboration with producer Nezzz—a project that showcased a more mature and personal artistic identity, emphasizing his lyrical approach and expressiveness. At the same time, as a founding member and rapper of Baro Passo, he has helped shape the band’s sound and identity, contributing to the releases of “Robin Hood,” “Bacteria,” and “Paliopaida,” featuring Taki Tsan. With dynamic live performances alongside both Unity and Baro Passo, Tay continues to evolve artistically, standing out for his intense stage presence, his authentic style of expression, and his consistent contribution to the contemporary Greek hip-hop scene, making him one of the key figures in DotDown’s creative identity.",
              fullInfo:
                "Tay is a rapper, a founding member of DotDown, and a rapper with Baro Passo. He began his recording career in 2021 as a member of Unity, alongside Diky and Sapiens, appearing on the EP “Pages of War,” which marked his first official release. In 2026, he released his solo EP “Navajo,” in collaboration with producer Nezzz—a project that showcased a more mature and personal artistic identity, emphasizing his lyrical approach and expressiveness. At the same time, as a founding member and rapper of Baro Passo, he has helped shape the band’s sound and identity, contributing to the releases of “Robin Hood,” “Bacteria,” and “Paliopaida,” featuring Taki Tsan. With dynamic live performances alongside both Unity and Baro Passo, Tay continues to evolve artistically, standing out for his intense stage presence, his authentic style of expression, and his consistent contribution to the contemporary Greek hip-hop scene, making him one of the key figures in DotDown’s creative identity.",
            },
            diky: {
              name: "DIKY",
              preview:
                "Diky is a rapper, beatmaker, member of the bands Baro Passo and Unity, and a founding member of DotDown. As a member of Unity, he released the EP “Pages of War” in 2021, on which he contributed both lyrics and beats, and as a member of Baro Passo, he released their debut EP titled “Bacteria” (2025). At the same time, he has contributed to the release of the projects “Pre-Season” and “Navajo,” solo EPs by Sapiens and Tay, respectively, in collaboration with Nezzz. His goal is collective expression through unique soundscapes each time, always emphasizing hip-hop culture combined with dusty beats and heavy riffs.",
              fullInfo:
                "Diky is a rapper, beatmaker, member of the bands Baro Passo and Unity, and a founding member of DotDown. As a member of Unity, he released the EP “Pages of War” in 2021, on which he contributed both lyrics and beats, and as a member of Baro Passo, he released their debut EP titled “Bacteria” (2025). At the same time, he has contributed to the release of the projects “Pre-Season” and “Navajo,” solo EPs by Sapiens and Tay, respectively, in collaboration with Nezzz. His goal is collective expression through unique soundscapes each time, always emphasizing hip-hop culture combined with dusty beats and heavy riffs.",
            },
            nez: {
              name: "NEZ",
              preview:
                "Nezzz is a DJ and music producer who is an active figure in the contemporary hip-hop scene. He started out as a lo-fi producer and has surpassed 800,000+ streams on streaming platforms. He has his own music studio and is a member of the Dot Down collective, with whom he has performed at live shows and concerts. Drawing inspiration from hip-hop, lo-fi, and contemporary electronic music, he continues to evolve his sound both as a producer and as a DJ.",
              fullInfo:
                "Nezzz is a DJ and music producer who is an active figure in the contemporary hip-hop scene. He started out as a lo-fi producer and has surpassed 800,000+ streams on streaming platforms. He has his own music studio and is a member of the Dot Down collective, with whom he has performed at live shows and concerts. Drawing inspiration from hip-hop, lo-fi, and contemporary electronic music, he continues to evolve his sound both as a producer and as a DJ.",
            },
            baroPasso: {
              name: "BARO PASSO",
              preview:
                "BARO PASSO is a rap-rock band from Athens that combines the authentic sound of rock with the energy and directness of Greek hip hop. They formed in 2022. The band consists of Konstantinos Drougganis (drums), Nikos Christogiannopoulos (bass), Spyros Spyropoulos (guitar), Antonis Fallieras (guitar), Panagiotis Konstantopoulos – Sapiens (rap), Kyriakos Dimitroulas – Diky (rap), and Giannis Georgiou – Tay (rap). Their discography includes the single “Robin Hood,” their debut album “Bacteria,” and “Paliopaida,” featuring Taki Tsan. The album launch took place at Ilion Plus in Athens. With performances at venues such as Ilion Plus, Architektoniki Live Stage, Kyttaro Live Stage, and Bad Tooth Live Stage, BARO PASSO has built a reputation as a band with an explosive stage presence, intense energy, and a distinctive sound that bridges two musical worlds.",
              fullInfo:
                "BARO PASSO is a rap-rock band from Athens that combines the authentic sound of rock with the energy and directness of Greek hip hop. They formed in 2022. The band consists of Konstantinos Drougganis (drums), Nikos Christogiannopoulos (bass), Spyros Spyropoulos (guitar), Antonis Fallieras (guitar), Panagiotis Konstantopoulos – Sapiens (rap), Kyriakos Dimitroulas – Diky (rap), and Giannis Georgiou – Tay (rap). Their discography includes the single “Robin Hood,” their debut album “Bacteria,” and “Paliopaida,” featuring Taki Tsan. The album launch took place at Ilion Plus in Athens. With performances at venues such as Ilion Plus, Architektoniki Live Stage, Kyttaro Live Stage, and Bad Tooth Live Stage, BARO PASSO has built a reputation as a band with an explosive stage presence, intense energy, and a distinctive sound that bridges two musical worlds.",
            },
          },
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
      form: {
        name: "Ονοματεπώνυμο",
        email: "Email",
        phone: "Τηλέφωνο",
        message: "Πώς Μπορούμε Να Σε Βοηθήσουμε;",
        submit: "Αποστολή",
        sending: "Αποστολή...",
        success: "Ευχαριστούμε! Το μήνυμά σου στάλθηκε.",
        error: "Κάτι πήγε στραβά. Δοκίμασε ξανά.",
      },
      },
      artistsPage: {
        title: "Μέλη",
        moreInfo: "Περισσότερα",
        tags: {
          rapper: "Ράπερ",
          producer: "Παραγωγός",
          band: "Συγκρότημα",
        },
        members: {
          sapiens: {
            name: "SAPIENS",
            preview:
              "Ο Sapiens είναι ράπερ, beatmaker και ιδρυτικό μέλος των DotDown. Ξεκίνησε τη δισκογραφική του πορεία το 2021 ως ιδρυτικό μέλος των Unity, μαζί με τους Diky και Tay, συνεισφέροντας ως ράπερ και beatmaker στο EP «Pages of War». Στη συνέχεια κυκλοφόρησε το σόλο project του «Pre-Season», σε συνεργασία με τον παραγωγό Nezzz, επεκτείνοντας το καλλιτεχνικό του στίγμα τόσο στιχουργικά όσο και παραγωγικά. Είναι επίσης ράπερ των Baro Passo, με τους οποίους έχει κυκλοφορήσει το single «Robin Hood», το άλμπουμ «Bacteria» και το single «Παλιόπαιδα» με τη συμμετοχή του Taki Tsan. Με πλήθος live εμφανίσεων στο ενεργητικό του, τόσο με τους Unity όσο και με τους Baro Passo, ο Sapiens συνεχίζει να πρεσβεύει το hip hop μέσα από τον συνδυασμό στιχουργικής έκφρασης και μουσικής παραγωγής, αποτελώντας αναπόσπαστο κομμάτι της δημιουργικής ταυτότητας των DotDown.",
            fullInfo:
              "Ο Sapiens είναι ράπερ, beatmaker και ιδρυτικό μέλος των DotDown. Ξεκίνησε τη δισκογραφική του πορεία το 2021 ως ιδρυτικό μέλος των Unity, μαζί με τους Diky και Tay, συνεισφέροντας ως ράπερ και beatmaker στο EP «Pages of War». Στη συνέχεια κυκλοφόρησε το σόλο project του «Pre-Season», σε συνεργασία με τον παραγωγό Nezzz, επεκτείνοντας το καλλιτεχνικό του στίγμα τόσο στιχουργικά όσο και παραγωγικά. Είναι επίσης ράπερ των Baro Passo, με τους οποίους έχει κυκλοφορήσει το single «Robin Hood», το άλμπουμ «Bacteria» και το single «Παλιόπαιδα» με τη συμμετοχή του Taki Tsan. Με πλήθος live εμφανίσεων στο ενεργητικό του, τόσο με τους Unity όσο και με τους Baro Passo, ο Sapiens συνεχίζει να πρεσβεύει το hip hop μέσα από τον συνδυασμό στιχουργικής έκφρασης και μουσικής παραγωγής, αποτελώντας αναπόσπαστο κομμάτι της δημιουργικής ταυτότητας των DotDown.",
          },
          tay: {
            name: "TAY",
            preview:
              "Ο Tay είναι ράπερ, ιδρυτικό μέλος των DotDown και ράπερ των Baro Passo. Ξεκίνησε τη δισκογραφική του πορεία το 2021 ως μέλος των Unity, μαζί με τους Diky και Sapiens, συμμετέχοντας στο EP «Pages of War», που αποτέλεσε την πρώτη του επίσημη κυκλοφορία. Το 2026 κυκλοφόρησε το σόλο EP του «Navajo», σε συνεργασία με τον παραγωγό Nezzz—ένα project που ανέδειξε μια πιο ώριμη και προσωπική καλλιτεχνική ταυτότητα, δίνοντας έμφαση στη στιχουργική του προσέγγιση και την εκφραστικότητά του. Παράλληλα, ως ιδρυτικό μέλος και ράπερ των Baro Passo, έχει συμβάλει στη διαμόρφωση του ήχου και της ταυτότητας του συγκροτήματος, συνεισφέροντας στις κυκλοφορίες «Robin Hood», «Bacteria» και «Παλιόπαιδα», με τη συμμετοχή του Taki Tsan. Με δυναμικές live εμφανίσεις τόσο με τους Unity όσο και με τους Baro Passo, ο Tay συνεχίζει να εξελίσσεται καλλιτεχνικά, ξεχωρίζοντας για την έντονη σκηνική του παρουσία, το αυθεντικό του ύφος έκφρασης και τη σταθερή συνεισφορά του στη σύγχρονη ελληνική hip-hop σκηνή, καθιστώντας τον μία από τις βασικές φυσιογνωμίες της δημιουργικής ταυτότητας των DotDown.",
            fullInfo:
              "Ο Tay είναι ράπερ, ιδρυτικό μέλος των DotDown και ράπερ των Baro Passo. Ξεκίνησε τη δισκογραφική του πορεία το 2021 ως μέλος των Unity, μαζί με τους Diky και Sapiens, συμμετέχοντας στο EP «Pages of War», που αποτέλεσε την πρώτη του επίσημη κυκλοφορία. Το 2026 κυκλοφόρησε το σόλο EP του «Navajo», σε συνεργασία με τον παραγωγό Nezzz—ένα project που ανέδειξε μια πιο ώριμη και προσωπική καλλιτεχνική ταυτότητα, δίνοντας έμφαση στη στιχουργική του προσέγγιση και την εκφραστικότητά του. Παράλληλα, ως ιδρυτικό μέλος και ράπερ των Baro Passo, έχει συμβάλει στη διαμόρφωση του ήχου και της ταυτότητας του συγκροτήματος, συνεισφέροντας στις κυκλοφορίες «Robin Hood», «Bacteria» και «Παλιόπαιδα», με τη συμμετοχή του Taki Tsan. Με δυναμικές live εμφανίσεις τόσο με τους Unity όσο και με τους Baro Passo, ο Tay συνεχίζει να εξελίσσεται καλλιτεχνικά, ξεχωρίζοντας για την έντονη σκηνική του παρουσία, το αυθεντικό του ύφος έκφρασης και τη σταθερή συνεισφορά του στη σύγχρονη ελληνική hip-hop σκηνή, καθιστώντας τον μία από τις βασικές φυσιογνωμίες της δημιουργικής ταυτότητας των DotDown.",
          },
          diky: {
            name: "DIKY",
            preview:
              "Ο Diky είναι ράπερ, beatmaker, μέλος των συγκροτημάτων Baro Passo και Unity, και ιδρυτικό μέλος των DotDown. Ως μέλος των Unity, κυκλοφόρησε το EP «Pages of War» το 2021, στο οποίο συνεισέφερε τόσο στίχους όσο και beats, ενώ ως μέλος των Baro Passo κυκλοφόρησε το ντεμπούτο EP τους με τίτλο «Bacteria» (2025). Παράλληλα, έχει συμβάλει στην κυκλοφορία των projects «Pre-Season» και «Navajo», σόλο EP των Sapiens και Tay αντίστοιχα, σε συνεργασία με τον Nezzz. Στόχος του είναι η συλλογική έκφραση μέσα από μοναδικά ηχοτοπία κάθε φορά, δίνοντας πάντα έμφαση στην κουλτούρα του hip-hop σε συνδυασμό με σκονισμένα beats και βαριά riffs.",
            fullInfo:
              "Ο Diky είναι ράπερ, beatmaker, μέλος των συγκροτημάτων Baro Passo και Unity, και ιδρυτικό μέλος των DotDown. Ως μέλος των Unity, κυκλοφόρησε το EP «Pages of War» το 2021, στο οποίο συνεισέφερε τόσο στίχους όσο και beats, ενώ ως μέλος των Baro Passo κυκλοφόρησε το ντεμπούτο EP τους με τίτλο «Bacteria» (2025). Παράλληλα, έχει συμβάλει στην κυκλοφορία των projects «Pre-Season» και «Navajo», σόλο EP των Sapiens και Tay αντίστοιχα, σε συνεργασία με τον Nezzz. Στόχος του είναι η συλλογική έκφραση μέσα από μοναδικά ηχοτοπία κάθε φορά, δίνοντας πάντα έμφαση στην κουλτούρα του hip-hop σε συνδυασμό με σκονισμένα beats και βαριά riffs.",
          },
          nez: {
            name: "NEZ",
            preview:
              "Ο Nezzz είναι DJ και μουσικός παραγωγός, ενεργός στη σύγχρονη hip-hop σκηνή. Ξεκίνησε ως lo-fi παραγωγός και έχει ξεπεράσει τα 800.000+ streams στις πλατφόρμες μουσικής. Διαθέτει το δικό του μουσικό στούντιο και είναι μέλος του συλλογικού σχήματος Dot Down, με το οποίο έχει εμφανιστεί σε live shows και συναυλίες. Αντλώντας έμπνευση από το hip-hop, το lo-fi και τη σύγχρονη ηλεκτρονική μουσική, συνεχίζει να εξελίσσει τον ήχο του τόσο ως παραγωγός όσο και ως DJ.",
            fullInfo:
              "Ο Nezzz είναι DJ και μουσικός παραγωγός, ενεργός στη σύγχρονη hip-hop σκηνή. Ξεκίνησε ως lo-fi παραγωγός και έχει ξεπεράσει τα 800.000+ streams στις πλατφόρμες μουσικής. Διαθέτει το δικό του μουσικό στούντιο και είναι μέλος του συλλογικού σχήματος Dot Down, με το οποίο έχει εμφανιστεί σε live shows και συναυλίες. Αντλώντας έμπνευση από το hip-hop, το lo-fi και τη σύγχρονη ηλεκτρονική μουσική, συνεχίζει να εξελίσσει τον ήχο του τόσο ως παραγωγός όσο και ως DJ.",
          },
          baroPasso: {
            name: "BARO PASSO",
            preview:
              "Οι BARO PASSO είναι ένα rap-rock συγκρότημα από την Αθήνα που συνδυάζει τον αυθεντικό ήχο της rock με την ενέργεια και την αμεσότητα του ελληνικού hip hop. Σχηματίστηκαν το 2022. Το συγκρότημα αποτελείται από τους Κωνσταντίνο Δρουγγάνη (τύμπανα), Νίκο Χριστογιαννόπουλο (μπάσο), Σπύρο Σπυρόπουλο (κιθάρα), Αντώνη Φαλλιέρα (κιθάρα), Παναγιώτη Κωνσταντόπουλο – Sapiens (ράπ), Κυριάκο Δημητρούλα – Diky (ράπ) και Γιάννη Γεωργίου – Tay (ράπ). Στη δισκογραφία τους περιλαμβάνονται το single «Robin Hood», το ντεμπούτο άλμπουμ τους «Bacteria» και το «Παλιόπαιδα», με τη συμμετοχή του Taki Tsan. Η παρουσίαση του άλμπουμ πραγματοποιήθηκε στο Ilion Plus στην Αθήνα. Με εμφανίσεις σε χώρους όπως το Ilion Plus, την Αρχιτεκτονική Live Stage, το Κύτταρο Live Stage και το Bad Tooth Live Stage, οι BARO PASSO έχουν χτίσει τη φήμη ενός συγκροτήματος με εκρηκτική σκηνική παρουσία, έντονη ενέργεια και ξεχωριστό ήχο που γεφυρώνει δύο μουσικούς κόσμους.",
            fullInfo:
              "Οι BARO PASSO είναι ένα rap-rock συγκρότημα από την Αθήνα που συνδυάζει τον αυθεντικό ήχο της rock με την ενέργεια και την αμεσότητα του ελληνικού hip hop. Σχηματίστηκαν το 2022. Το συγκρότημα αποτελείται από τους Κωνσταντίνο Δρουγγάνη (τύμπανα), Νίκο Χριστογιαννόπουλο (μπάσο), Σπύρο Σπυρόπουλο (κιθάρα), Αντώνη Φαλλιέρα (κιθάρα), Παναγιώτη Κωνσταντόπουλο – Sapiens (ράπ), Κυριάκο Δημητρούλα – Diky (ράπ) και Γιάννη Γεωργίου – Tay (ράπ). Στη δισκογραφία τους περιλαμβάνονται το single «Robin Hood», το ντεμπούτο άλμπουμ τους «Bacteria» και το «Παλιόπαιδα», με τη συμμετοχή του Taki Tsan. Η παρουσίαση του άλμπουμ πραγματοποιήθηκε στο Ilion Plus στην Αθήνα. Με εμφανίσεις σε χώρους όπως το Ilion Plus, την Αρχιτεκτονική Live Stage, το Κύτταρο Live Stage και το Bad Tooth Live Stage, οι BARO PASSO έχουν χτίσει τη φήμη ενός συγκροτήματος με εκρηκτική σκηνική παρουσία, έντονη ενέργεια και ξεχωριστό ήχο που γεφυρώνει δύο μουσικούς κόσμους.",
          },
        },
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