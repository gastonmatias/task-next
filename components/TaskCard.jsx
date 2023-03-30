import Link from 'next/link';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

import { confirmAction } from './UI/ConfirmAction';
import { startDeleteTask } from '@/store';
import { useDispatch } from 'react-redux';

export const TaskCard = ({task}) => {

  const dispatch = useDispatch()

  const handleDelete = async () => {
    confirmAction(
      'Delete Task',
      'Are You Sure?',
      deleteTask //fx como referencia
    )
  }
    
  const deleteTask = () => dispatch(startDeleteTask(task.id))
  
  return (
    <>
    <Card variant="outlined" sx={{
      display:'flex',
      m:1,
      border: '0.4px dotted white'
    }}>
        <CardContent sx={{flex:'1'}} >
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
          <Link href={`/tasks/${task.id}`}>
            <IconButton aria-label="edit">
              <EditOutlinedIcon color='primary'/>
            </IconButton>
          </Link>

          <IconButton aria-label="delete" onClick={()=> handleDelete()}>
            <DeleteOutlineOutlinedIcon color='error'/>
          </IconButton>

          <IconButton aria-label="done">
            <DoneOutlineOutlinedIcon color='success'/>
          </IconButton>
        </CardActions>
    </Card>
    </>
)}