import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const ModalHero = styled(Box)({
  width: '90%',
  height: '80%',
  padding: '100px 50px',
  backgroundImage: 'radial-gradient(circle, #2f2f3d 10%, #4b4536 30%, #1f1d1d 70%)',
  borderRadius: 5,
});

export const ContainerHeroes = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start'
});

export const ContainerHeroImage = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 15,
});

export const HabilityHero = styled('div')({
  display: 'flex',
  alignItems: 'center',
  columnGap: 5,
});

export const ArrowDropUpIconGreen = styled(ArrowDropUpIcon)({
  color: 'green',
});

export const ArrowDropDownIconRed = styled(ArrowDropDownIcon)({
  color: 'red',
});
