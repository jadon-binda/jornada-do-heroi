import React from 'react';
import './styles.css';
import propTypes from 'prop-types';

function HeroCard({ hero }) {
  const { images, name, powerstats } = hero;

  const sumPowerstats = () => {
    const { intelligence, strength, speed, durability, power, combat } = powerstats;
    const combatPower = intelligence + strength + speed + durability + power + combat;
    return combatPower;
  };

  return (
    <section className="hero-card">
      <img src={images.sm} alt={name} className="card__image" />
      <div className="card__infos">
        <h2 className="card__name">{name}</h2>
        <h3 className="card__power">{sumPowerstats()}</h3>
      </div>
    </section>
  );
}
HeroCard.propTypes;

export default HeroCard;

HeroCard.propTypes = {
  hero: propTypes.shape({}),
}.isRequired;
