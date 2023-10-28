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

  const monitorarClique = (e) => {
    if (localStorage.getItem('hero1') === null) {
      armazenarNoLocalStorageHero1(e);
    } else {
      armazenarNoLocalStorageHero2(e);
    }
  };

  const armazenarNoLocalStorageHero1 = (e) => {
    e.preventDefault();
    localStorage.setItem('hero1', JSON.stringify(hero));
  };

  const armazenarNoLocalStorageHero2 = (e) => {
    e.preventDefault();
    localStorage.setItem('hero2', JSON.stringify(hero));
  };

  return (
    <section id="hero-card" className="hero-card" onClick={(e) => monitorarClique(e)}>
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
