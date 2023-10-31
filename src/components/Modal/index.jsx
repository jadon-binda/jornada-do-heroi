import { Backdrop, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';
import { ArrowDropDownIconRed, ArrowDropUpIconGreen, ContainerHeroImage, ContainerHeroes, HabilityHero, ModalHero, ModalTitle } from './styles.jsx';

function Modal({ openModal, handleCloseModal }) {
  const arrayNumbers = [0, 1, 2, 3, 4, 5];
  const abilities = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
  const heroOneInfo = JSON.parse(localStorage.getItem('hero1'));
  const heroTwoInfo = JSON.parse(localStorage.getItem('hero2'));

  function sumPowerStatsHeroOne() {
    const { intelligence, strength, speed, durability, power, combat } = heroOneInfo.powerstats;
    const powerStatsHeroOne = intelligence + strength + speed + durability + power + combat;
    return powerStatsHeroOne;
  }

  function sumPowerStatsHeroTwo() {
    const { intelligence, strength, speed, durability, power, combat } = heroTwoInfo.powerstats;
    const powerStatsHeroTwo = intelligence + strength + speed + durability + power + combat;
    return powerStatsHeroTwo;
  }

  function combat(sum1, sum2) {
    if (sum1 > sum2) {
      return heroOneInfo.name;
    } else {
      return heroTwoInfo.name;
    }
  }

  function firstLetterCapitalize(word) {
    let newWord;
    const firstLetter = word[0].toUpperCase();
    newWord = firstLetter;
    for (let i = 1; i < word.length; i++) {
      newWord += word[i];
    }
    return newWord;
  }

  return (
    <>
      {(openModal) &&
        <Backdrop
          sx={{ color: 'rgba(245, 245, 245, 0.9)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openModal}
          onClick={handleCloseModal}
        >
          <ModalHero>
            <ModalTitle variant="h2" align="center" mb={5}>
              <Box component="span" sx={{ color: '#00FF00', fontSize: '2.5rem', fontWeight: 700 }}>
                Winner: </Box>
              {combat(sumPowerStatsHeroOne(), sumPowerStatsHeroTwo())}
            </ModalTitle>
            <ContainerHeroes>
              <ContainerHeroImage>
                <img src={heroOneInfo.images.sm} alt="heroi" style={{ width: 250 }} />
                <Typography variant="subtitle1" sx={{ fontSize: '1.125rem' }}>
                  {heroOneInfo.name}
                </Typography>
              </ContainerHeroImage>
              <Grid container>
                <Grid item mt={5} sx={{ width: '100%' }}>
                  <List sx={{ width: '100%', padding: '32px 56px' }}>
                    {arrayNumbers.map((number) =>
                      <ListItem sx={{ padding: 0 }} key={number.toString()} value={number}>
                        <HabilityHero>
                          <ListItemText
                            primary={heroOneInfo.powerstats[abilities[number]]}
                          />
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            {heroOneInfo.powerstats[abilities[number]] > heroTwoInfo.powerstats[abilities[number]]
                              ? <ArrowDropUpIconGreen />
                              : <ArrowDropDownIconRed />}
                          </ListItemIcon>
                        </HabilityHero>
                        <ListItemText
                          primary={firstLetterCapitalize(abilities[number])}
                          sx={{ textAlign: 'center' }}
                        />
                        <HabilityHero>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            {heroTwoInfo.powerstats[abilities[number]] > heroOneInfo.powerstats[abilities[number]]
                              ? <ArrowDropUpIconGreen />
                              : <ArrowDropDownIconRed />}
                          </ListItemIcon>
                          <ListItemText
                            primary={heroTwoInfo.powerstats[abilities[number]]}
                          />
                        </HabilityHero>
                      </ListItem>
                    )}
                  </List>
                </Grid>
              </Grid>
              <ContainerHeroImage>
                <img src={heroTwoInfo.images.sm} alt="heroi" style={{ width: 250 }} />
                <Typography variant="subtitle1" align="right" sx={{ fontSize: '1.125rem' }}>
                  {heroTwoInfo.name}
                </Typography>
              </ContainerHeroImage>
            </ContainerHeroes>
          </ModalHero>
        </Backdrop >}
    </>
  );
}

export default Modal;

Modal.propTypes = {
  openModal: propTypes.bool,
  handleCloseModal: propTypes.bool,
}.isRequired;
