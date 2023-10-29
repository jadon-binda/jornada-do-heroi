import { Backdrop, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';
import { ModalHero, ContainerHeroes, HabilityHero, ContainerHeroImage } from './styles.jsx';
import propTypes from 'prop-types';

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
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openModal}
          onClick={handleCloseModal}
        >
          <ModalHero>

            <Typography variant="h3" align="center" mb={5}>
              Winner {combat(sumPowerStatsHeroOne(), sumPowerStatsHeroTwo())}
            </Typography>

            <ContainerHeroes>

              <ContainerHeroImage>
                <img src={heroOneInfo.images.sm} alt="heroi" />
                <Typography variant="subtitle1">
                  {heroOneInfo.name}
                </Typography>
              </ContainerHeroImage>

              <Grid container>
                <Grid item sx={{ width: '100%' }}>
                  <List sx={{ padding: 4 }}>

                    {arrayNumbers.map((number) =>
                      <ListItem sx={{ padding: 0 }} key={number.toString()} value={number}>
                        <HabilityHero>
                          <ListItemText
                            primary={heroOneInfo.powerstats[abilities[number]]}
                          />
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <ArrowDropUpIcon sx={{ color: 'green' }} />
                          </ListItemIcon>
                        </HabilityHero>

                        <ListItemText
                          primary={firstLetterCapitalize(abilities[number])}
                          sx={{ textAlign: 'center' }}
                        />

                        <HabilityHero>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <ArrowDropDownIcon sx={{ color: 'red' }} />
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
                <img src={heroTwoInfo.images.sm} alt="heroi" />
                <Typography variant="subtitle1" align="right">
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
