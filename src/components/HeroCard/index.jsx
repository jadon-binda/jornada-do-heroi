import propTypes from 'prop-types';
import React from 'react';
import { PiSwordFill } from 'react-icons/pi';
import styles from './styles.module.css';

function HeroCard({ hero, handleOpenModal }) {
  const { images, name, powerstats } = hero;

  const sumPowerStats = () => {
    const { intelligence, strength, speed, durability, power, combat } = powerstats;
    const combatPower = intelligence + strength + speed + durability + power + combat;
    return combatPower;
  };

  const cardColor = (sum) => {
    if (sum > 0 & sum < 150) {
      return { backgroundColor: 'rgba(0, 0, 139, 0.5)', border: 'solid rgba(135, 206, 235, 0.7)', borderWidth: '2px 1px 1px 2px' };
    } else if (sum >= 150 & sum <= 250) {
      return { backgroundColor: 'rgba(105, 105, 105, 0.3)', border: 'solid rgba(211, 211, 211, 0.7)', borderWidth: '2px 1px 1px 2px' };
    } else if (sum > 250 & sum <= 350) {
      return { backgroundColor: 'rgba(0, 100, 0, 0.5)', border: 'solid rgba(144, 238, 144, 0.5)', borderWidth: '2px 1px 1px 2px' };
    } else if (sum > 350 & sum <= 500) {
      return { backgroundColor: '	rgba(102, 0, 204, 0.3)', border: 'solid rgba(148, 0, 211, 0.7)', borderWidth: '2px 1px 1px 2px' };
    } else if (sum > 500 & sum < 600) {
      return { backgroundColor: 'rgba(218, 165, 32, 0.3)', border: 'solid rgba(255, 165, 0, 0.5)', borderWidth: '2px 1px 1px 2px' };
    } else {
      return { backgroundColor: 'rgba(139, 0, 0, 0.3)', border: 'solid rgba(255, 0, 0, 0.5)', borderWidth: '2px 1px 1px 2px' };
    }
  };

  const cardShadow = (sum) => {
    if (sum > 0 & sum < 150) {
      return { boxShadow: '0px 2px 10px 2px rgba(135, 206, 235, 0.7)' };
    } else if (sum >= 150 & sum <= 250) {
      return { boxShadow: '0px 2px 10px 2px rgba(211, 211, 211, 0.7)' };
    } else if (sum > 250 & sum <= 350) {
      return { boxShadow: '0px 2px 10px 2px rgba(144, 238, 144, 0.5)' };
    } else if (sum > 350 & sum <= 500) {
      return { boxShadow: '0px 2px 10px 2px rgba(148, 0, 211, 0.7)' };
    } else if (sum > 500 & sum < 600) {
      return { boxShadow: '0px 2px 10px 2px rgba(255, 165, 0, 0.5)' };
    } else {
      return { boxShadow: '0px 2px 10px 2px rgba(255, 0, 0, 0.5)' };
    }
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
    handleOpenModal();
  };

  return (
    <section
      id="hero-card"
      className={styles.heroCard}
      onClick={(e) => monitorarClique(e)}
      style={cardColor(sumPowerStats())}
    >
      <img
        src={images.sm}
        alt={name}
        className={styles.heroImage}
        style={cardShadow(sumPowerStats())}
      />
      <div className={styles.heroInfos}>
        <h2 className={styles.heroName}>{name}</h2>
        <h2 className={styles.heroPower}><PiSwordFill />{sumPowerStats()}</h2>
      </div>
    </section>
  );
}

export default HeroCard;
HeroCard.propTypes = {
  hero: propTypes.shape({}),
}.isRequired;
