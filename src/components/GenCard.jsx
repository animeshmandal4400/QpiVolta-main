import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Button, Fab, useMediaQuery, useTheme } from '@mui/material'
import { tokens } from '../theme';
import img from "../assets/molucule.png"
const GenCard = ({avatar,title, subtitle,tags,button}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card sx={{ maxWidth: 345 , backgroundColor:`${colors.blueAccent[900]}` }} style={{borderRadius:"10px"}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="img"
      />
      <CardContent>
        {/* <Fab variant="extended">
            {tags}
        </Fab> */}
        <Button variant="contained" style={{backgroundColor:`${colors.pinkAccent[500]}`}}>
            {button}
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
  )
}

export default GenCard