import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

export const TaskCard = ({task}) => {

  return (
    <>
    <Card variant="outlined" sx={{
      display:'flex',
      // flexWrap:'wrap', 
      m:1,
      // maxWidth: '70vw'
    }}>
      {/* <Card> */}
        <CardContent sx={{flex:'1'}} >
        {/* <CardContent sx={{ flex: '1 0 auto' }}> */}
          {/*//todo: añadir fecha creacion/update  */}
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> */}
              {/* {task.date} */}
          {/* </Typography> */}

          <Typography variant="h5" component="div">
              {task.title}
          </Typography>

          <Typography variant="body2">
            {task.description}
          </Typography>
        </CardContent>
        
        <CardActions >
          <IconButton aria-label="add to favorites">
            <EditOutlinedIcon color='primary'/>
          </IconButton>
          <IconButton aria-label="share">
            <DeleteOutlineOutlinedIcon color='warning'/>
          </IconButton>
          <IconButton aria-label="share">
            <DoneOutlineOutlinedIcon color='success'/>
          </IconButton>
        </CardActions>
    {/* </Box> */}
    </Card>
    </>
)}