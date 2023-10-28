import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HeroCard from '../../components/HeroCard';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';
import './styles.css';

function Home() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [searchHero, setSearchHero] = useState('');

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
    <div className="container-main">
      <Header />
      <section className="search-container">
        <SearchInput searchHero={searchHero} setSearchHero={setSearchHero} />
      </section>
      <section className="heroes-container">
        {
          allHeroes.filter((hero) => {
            const heroNameLowerCase = hero.name.toLocaleLowerCase();
            const searchHeroLowerCase = searchHero.toLocaleLowerCase();
            const heroNameFilter = heroNameLowerCase.includes(searchHeroLowerCase);
            return heroNameFilter;
          }).map((hero) => <HeroCard key={hero.id} hero={hero} />)
        }
      </section>
    </div>
  );
}

export default Home;
