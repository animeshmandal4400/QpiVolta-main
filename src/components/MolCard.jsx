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
import { useDispatch } from "react-redux";
import { addComponent } from "../Redux/reducer/actions/recentViewedActions";
import { useNavigate } from 'react-router-dom';

const MolCard = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLaunchClick = () => {
      dispatch(
        addComponent({
          id: props.id,
          title: props.title,
          subtitle: props.subtitle,
          avatar: props.avatar,
          button: props.button,
          image: props.image,
        })
      );
      if (props.onClick) {
        props.onClick();
      }
    };
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
        <Button 
          onClick={handleLaunchClick}
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

export default MolCard
