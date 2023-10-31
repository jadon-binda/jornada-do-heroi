import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeroCard from '../../components/HeroCard';
import api from '../../services/api';
import './styles.css';

function Heroes({ searchHero, handleOpenModal }) {
  const [allHeroes, setAllHeroes] = useState([]);

  async function loadHeroes() {
    try {
      const response = await api.get('http://homologacao3.azapfy.com.br/api/ps/metahumans');

      setAllHeroes([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <section className="heroes-container">
      {
        allHeroes.filter((hero) => {
          const heroNameLowerCase = hero.name.toLocaleLowerCase();
          const searchHeroLowerCase = searchHero.toLocaleLowerCase();
          const heroNameFilter = heroNameLowerCase.includes(searchHeroLowerCase);
          return heroNameFilter;
        }).map((hero) => <HeroCard key={hero.id} hero={hero} handleOpenModal={() => handleOpenModal()} />)
      }
    </section>
  );
}

export default Heroes;

Heroes.propTypes = {
  searchHero: propTypes.string,
  handleOpenModal: propTypes.bool,
}.isRequired;
