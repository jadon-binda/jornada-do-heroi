import { Typography, Stack, styled } from '@mui/material';
import React from 'react';
import Herois from '../../assets/herois.png';

const ContainerHeroes = styled(Stack)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const MainTitle = styled(Typography)({
  fontFamily: '\'Patrick Hand SC\', cursive',
  fontWeight: 500,
  color: 'lightgray',
  textTransform: 'uppercase',
});

function ContentMain() {
  return (
    <ContainerHeroes>
      <img src={Herois} alt="herois" />
      <MainTitle variant="h1">
        Jornada do Herói
      </MainTitle>
    </ContainerHeroes>
  );
}

export default ContentMain;
