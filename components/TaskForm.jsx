import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, TextField, Button, Box } from "@mui/material"
import { tasksApi } from '@/apis';
import { useRouter } from 'next/router';

export const TaskForm = ({title='', description='', formType='Create Task'}) => {
  
  const router = useRouter()

  const [task, setTask] = useState({
    title,
    description
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    //! dependiendo de la ruta actual, se determinará si el form se está
    //! utilizando para CREAR o ACTUALIZAR un task
    if (router.pathname==='/tasks/create') {
      await tasksApi.post('/tasks',{task})

    }
    else {
      const {query:{id}} = router
      const {title, description} = task
      
      await tasksApi.put(`/tasks/${id}`,{title, description})
    }
    
    router.push('/')
  }

  const handleChange = (e) => {
    setTask({
      ...task, 
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <>
    <Grid container alignItems={'center'} justifyContent='center' direction='column'>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography>
              {formType}
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                name='title'
                onChange={handleChange}
                value={task.title}
                variant="filled"
                label="Write your title"
                placeholder="Study Next.js"
                fullWidth
                sx={{ my: 1}}
                />
              
              <TextField
                name='description'
                onChange={handleChange}
                value={task.description}
                variant="filled"
                label="Write your description"
                placeholder="Because create-react-app is dead R.I.P"
                multiline
                rows={4}
                fullWidth
                sx={{ my: 1}}
              />

              <Button fullWidth variant='contained' color="primary" type="submit">
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  )
}