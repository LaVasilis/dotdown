import React from "react";
import { useTranslation } from "react-i18next";
import CardCarousel from './CardCarousel.jsx';

function Home() {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      title: t("home.cards.first.title", "First feature"),
      description: t(
        "home.cards.first.description",
        "Explain the first cool thing your app does."
      ),
    },
    {
      id: 2,
      title: t("home.cards.second.title", "Second feature"),
      description: t(
        "home.cards.second.description",
        "Short description of another nice feature."
      ),
    },
    {
      id: 3,
      title: t("home.cards.third.title", "Third feature"),
      description: t(
        "home.cards.third.description",
        "Something else that makes your app special."
      ),
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
