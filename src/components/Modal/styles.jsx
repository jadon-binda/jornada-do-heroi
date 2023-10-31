import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalHero = styled(Box)({
  width: '90%',
  height: '80%',
  padding: '100px 80px',
  backgroundImage: 'radial-gradient(circle, #2f2f3d 10%, #4b4536 30%, #1f1d1d 70%)',
  borderRadius: 8,
});

export const ModalTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 400,
  color: '#fff',
});

export const ContainerHeroes = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start'
});

export const ContainerHeroImage = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 25,
});

export const HabilityHero = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
});

export const ArrowDropUpIconGreen = styled(ArrowDropUpIcon)({
  color: 'green',
});

export const ArrowDropDownIconRed = styled(ArrowDropDownIcon)({
  color: 'red',
});
