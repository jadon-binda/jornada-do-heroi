import React, { useState } from 'react';
import Aside from '../../components/Aside';
import Heroes from '../../components/Heroes';
import Modal from '../../components/Modal';
import SearchInput from '../../components/SearchInput';
import './styles.css';

function Home() {
  const [searchHero, setSearchHero] = useState('');
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    localStorage.removeItem('hero1');
    localStorage.removeItem('hero2');
    setOpenModal(false);
  }

  return (
    <div className="container-main">
      <Aside showBack />
      <Heroes searchHero={searchHero} handleOpenModal={handleOpenModal} />
      <section className="search-container">
        <SearchInput searchHero={searchHero} setSearchHero={setSearchHero} />
      </section>
      <Modal openModal={openModal} handleCloseModal={() => handleCloseModal()} />
    </div>
  );
}

export default Home;
