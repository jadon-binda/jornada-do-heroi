import React, { useState } from 'react';
import Aside from '../../components/Aside';
import Heroes from '../../components/Heroes';
import Modal from '../../components/Modal';
import SearchInput from '../../components/SearchInput';

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
      <SearchInput searchHero={searchHero} setSearchHero={setSearchHero} />
      <Modal openModal={openModal} handleCloseModal={() => handleCloseModal()} />
    </div>
  );
}

export default Home;
