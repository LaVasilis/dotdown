import React from "react";
import { useTranslation } from "react-i18next";
import CardCarousel from './CardCarousel.jsx';

function Home() {
  const { t } = useTranslation();

const cards = [
  {
    id: 1,
    image: "/src/assets/eminem.jpg",
    // title: "First feature",
    // description: "Explain the first cool thing your app does.",
  },
  {
    id: 2,
    image: "/src/assets/2j.jpg",
    // title: "Second feature",
    // description: "Short description of another nice feature.",
  },
  {
    id: 3,
    image: "/src/assets/daima.jpg",
    // title: "Third feature",
    // description: "Something else that makes your app special.",
  },
];

  return (
    <section className="home-hero">
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>

      <CardCarousel cards={cards} />
    </section>
  );
}

export default Home;
