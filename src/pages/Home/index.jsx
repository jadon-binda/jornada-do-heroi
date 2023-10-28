import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HeroCard from '../../components/HeroCard';
import api from '../../services/api';
import './styles.css';

function Home() {
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
    <div className="container-main">
      <Header />
      <section className="heroes-container">
        {
          allHeroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)
        }
      </section>
    </div>
  );
}

export default Home;
