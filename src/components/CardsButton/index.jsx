import RocketIcon from '@mui/icons-material/Rocket';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardBtn = styled(Button)(({
  width: 150,
  padding: '6px 25px',
  justifyContent: 'flex-start',
  columnGap: 3,
  backgroundColor: 'royalblue',
  borderRadius: 10,
  textTransform: 'capitalize',
}));

function CardsButton() {
  const navigate = useNavigate();

  return (
    <CardBtn
      variant="contained"
      startIcon={<RocketIcon />}
      onClick={() => navigate('/home')}
    >
      Cartas
    </CardBtn>
  );
}

export default CardsButton;
