import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, useTheme } from '@mui/material'
import { tokens } from '../theme';

const GenCard = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{ maxWidth: 350,backgroundColor:`${colors.blueAccent[900]}` }} style={{borderRadius:"10px"}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subtitle}
      />
      {props.image && (
        <CardMedia
          component="img"
          height="100"
          image={props.image}
          alt="img"
        />
      )}
      <CardContent>
        {/* <Chip variant="outlined" label="Orgnic LED"/> */}
        <Button 
        onClick={props.onClick}
          variant="contained" 
          style={{backgroundColor:`${colors.pinkAccent[500]}`}} 
        >
            {props.button}
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
