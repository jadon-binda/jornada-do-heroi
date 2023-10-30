import React, { useEffect, useState } from 'react';
import Aside from '../../components/Aside';
import HeroCard from '../../components/HeroCard';
import Modal from '../../components/Modal';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';
import './styles.css';

function Home() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [searchHero, setSearchHero] = useState('');
  const [openModal, setOpenModal] = useState(false);

  async function loadHeroes() {
    try {
      const response = await api.get('http://homologacao3.azapfy.com.br/api/ps/metahumans');

      setAllHeroes([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    localStorage.removeItem('hero1');
    localStorage.removeItem('hero2');
    setOpenModal(false);
  }

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <div className="container-main">
      <Aside />
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
      <section className="search-container">
        <SearchInput searchHero={searchHero} setSearchHero={setSearchHero} />
      </section>
      <Modal openModal={openModal} handleCloseModal={() => handleCloseModal()} />
    </div>
  );
}

export default Home;
