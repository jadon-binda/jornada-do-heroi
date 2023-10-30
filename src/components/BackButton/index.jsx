import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackBtn = styled(Button)({
  minWidth: 50,
  padding: '6px 0',
  backgroundColor: 'royalblue',
  borderRadius: 10,

});

function BackButton() {
  const navigate = useNavigate();

  return (
    <BackBtn
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
    >
    </BackBtn>
  );
}

export default BackButton;
