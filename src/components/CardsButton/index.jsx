import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { BiSolidPlanet } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const CardBtn = styled(Button)(({
  width: 150,
  padding: '6px 25px',
  backgroundColor: 'royalblue',
  borderRadius: 10,
  textTransform: 'capitalize',
  justifyContent: 'flex-start',
  columnGap: 3,
}));

function CardsButton() {
  const navigate = useNavigate();

  return (
    <CardBtn
      variant="contained"
      startIcon={<BiSolidPlanet />}
      onClick={() => navigate('/home')}
    >
      Cartas
    </CardBtn>
  );
}

export default CardsButton;
