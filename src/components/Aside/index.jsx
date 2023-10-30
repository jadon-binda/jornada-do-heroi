import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material';
import React from 'react';
import CardsButton from '../CardsButton';
import './styles.css';

const AccountCircleIconStyled = styled(AccountCircleIcon)({
  width: 50,
  height: 50,
  color: 'royalblue',
  backgroundColor: 'black'
});

function Aside() {
  return (
    <aside className="side-bar">
      <div className="sidebar__content">
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
