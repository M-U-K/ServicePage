import {Box, Button, Typography, Grid, Checkbox, Avatar, AvatarGroup, ButtonGroup} from '@mui/material/';
import { red, deepOrange, deepPurple } from '@mui/material/colors';
import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleUnchecked from '@mui/icons-material/CheckCircle';
import Attchment from '@mui/icons-material/Attachment';
import Textsms from '@mui/icons-material/Textsms';
import * as SX from './ServicePageStyle.js'
import React, { useState } from 'react';
import '@fontsource/roboto/300.css';

export default function ServicePage() {
  const [counter, setCounter] = useState(0);
  function clickHere() {
      if (counter === 0)
        setCounter(1);
      else
        setCounter(0)
  }
  return (
    <Box sx={SX.Container}>
      <Grid container rowGap={7} direction="row" textAlign="left">
        <Button variant="contained" mode="outlined" size='large' sx={SX.UserInterface}>User Interface</Button>
        <Typography variant='h3' sx={SX.Text}> Service Page Website </Typography>
        <Typography variant='h5' sx={SX.Text}> Make a page display about services for websites company with blue and red colors </Typography>
        <Checkbox  onChange={clickHere} sx={SX.Checkbox} icon={<CircleChecked />}   checkedIcon={<CircleUnchecked />} borderRadius={50} {...SX.Label}/>
        <Typography variant='h5' sx={SX.NumberOfValid}>{counter}/20</Typography>
        <AvatarGroup sx={SX.AvatarGroup} max={3}>
          <Avatar sx={{ bgcolor: red[500], width: 50, height: 50 }}>H</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 50, height: 50 }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }}>OP</Avatar>
        </AvatarGroup>
        <Button variant="contained" mode="outlined" size='large' sx={SX.BtnInvite}>Invite</Button>
        <ButtonGroup color='info' variant="contained" sx={SX.GrpButton} >
          <Button variant="text" sx={SX.Btn}><Attchment/> 4 Attachment</Button>
          <Button variant="text" sx={SX.Btn}><Textsms/> 10 Comment</Button>
        </ButtonGroup>
      </Grid>
    </Box>
  );
}