import Link from 'next/link';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

import { tasksApi } from '@/apis';
import { confirmAction } from './UI/ConfirmAction';

export const TaskCard = ({task, setTasks}) => {

  const handleDelete = async () => {
    confirmAction(
      'Delete Task',
      'Are You Sure?',
      deleteTask
    )
  }
    
  const deleteTask = async() => {
    await tasksApi.delete(`/tasks/${task.id}`)
    refreshTasks()
  }

  const refreshTasks = async () => {
    const {data} = await tasksApi.get('/tasks')
    setTasks(data.tasks)
  }


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
            <DeleteOutlineOutlinedIcon color='warning'/>
          </IconButton>

          <IconButton aria-label="done">
            <DoneOutlineOutlinedIcon color='success'/>
          </IconButton>
        </CardActions>
    </Card>
    </>
)}