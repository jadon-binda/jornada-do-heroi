import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';
import BackButton from '../BackButton';
import CardsButton from '../CardsButton';
import './styles.css';

const AccountCircleIconStyled = styled(AccountCircleIcon)({
  width: 50,
  height: 50,
  color: 'royalblue',
  backgroundColor: 'black'
});

function Aside({ showBack }) {

  return (
    <aside className="side-bar">
      <div className="sidebar__content">
        {showBack &&
          <BackButton />
        }
        <div className="sidebar__userinfo">
          <AccountCircleIconStyled />
          <h2>Jadon</h2>
        </div>
        <CardsButton />
      </div>
    </aside>
  );
}

export default Aside;

Aside.propTypes = {
  showBack: propTypes.bool,
}.isRequired;
