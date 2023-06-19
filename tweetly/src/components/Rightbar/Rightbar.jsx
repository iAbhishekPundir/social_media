import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Rightbar() {

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block", } }}>
      <Box position="fixed" >
      
      
    <Card  sx={{ maxWidth: 355, mt:2}}>
    <Typography sx={{ fontSize: 24, fontWeight: 500, m:1  }}>
        Suggested users
      </Typography>
      <Divider/>
    <CardContent sx={{display:"flex", p:0.5,}}>
      <Avatar sx={{ bgcolor: red[500] ,m:1 }} aria-label="recipe">
            
      </Avatar>
      <div>
     <Typography sx={{ fontSize: 16, fontWeight: 500, m:1,mb:0, minWidth:120 }}  gutterBottom>
        Adarsh balika
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 400,ml:1, p:0 }}>
        @adarshbalika
      </Typography>
      </div>
      <CardActions sx={{ml:2}} >
      <Button size="medium" >Follow+</Button>
      </CardActions>

    </CardContent>
    <CardContent sx={{display:"flex", p:0.5,}}>
      <Avatar sx={{ bgcolor: red[500] ,m:1 }} aria-label="recipe">
            
      </Avatar>
      <div>
     <Typography sx={{ fontSize: 16, fontWeight: 500, m:1,mb:0, minWidth:120 }}  gutterBottom>
        Kunal Sharma
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 400,ml:1, p:0 }}>
        @kunalsharma
      </Typography>
      </div>
      <CardActions sx={{ml:2}}>
      <Button size="medium" >Follow+</Button>
      </CardActions>

    </CardContent>
    
    </Card>
    </Box>
    </Box>
  );
}