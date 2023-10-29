import { Backdrop, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react';
import { ModalHero, ContainerHeroes, HabilityHero, ContainerHeroImage } from './styles.jsx';
import propTypes from 'prop-types';

function Modal({ openModal, handleCloseModal }) {

  function generate(element) {
    return [0, 1, 2, 3, 4, 5].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
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
              Winner nomeDoHerói
            </Typography>

            <ContainerHeroes>

              <ContainerHeroImage>
                <img src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/38-aquaman.jpg" alt="heroi" />
                <Typography variant="subtitle1">
                  Nome do Herói
                </Typography>
              </ContainerHeroImage>

              <Grid container>
                <Grid item sx={{ width: '100%' }}>
                  <List sx={{ padding: 4 }}>
                    {generate(
                      <ListItem sx={{ padding: 0 }}>

                        <HabilityHero>
                          <ListItemText
                            primary="100"
                          />
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <FolderIcon />
                          </ListItemIcon>
                        </HabilityHero>

                        <ListItemText
                          primary="Habilidade"
                          sx={{ textAlign: 'center' }}
                        />

                        <HabilityHero>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <FolderIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="100"
                          />
                        </HabilityHero>

                      </ListItem>,
                    )}
                  </List>
                </Grid>
              </Grid>

              <ContainerHeroImage>
                <img src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/156-captain-marvel.jpg" alt="heroi" />
                <Typography variant="subtitle1" align="right">
                  Nome do Herói
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
