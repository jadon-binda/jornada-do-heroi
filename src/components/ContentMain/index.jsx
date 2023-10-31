import { Stack, Typography, styled } from '@mui/material';
import React from 'react';
import Herois from '../../assets/herois.png';

const ContainerHeroes = styled(Stack)({
  width: '100%',
  marginTop: 70,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const MainTitle = styled(Typography)({
  fontFamily: '\'Patrick Hand SC\', cursive',
  fontStyle: 'italic',
  color: 'rgba(211, 211, 211, 0.8)',
  textTransform: 'uppercase',
});

const MainText = styled(Typography)({
  fontFamily: '\'Patrick Hand SC\', cursive',
  fontSize: '1.25rem',
  color: 'rgba(211, 211, 211, 0.8)',
});

function ContentMain() {
  return (
    <ContainerHeroes>
      <img src={Herois} alt="herois" style={{ width: 880 }} />
      <MainTitle variant="h1">
        Jornada do Herói
      </MainTitle>
      <MainText variant="body1">Clique no botão Cartas, ao lado, para iniciar o combate entre heróis...</MainText>
    </ContainerHeroes>
  );
}

export default ContentMain;
