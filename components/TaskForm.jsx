import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography, TextField, Button, Box } from "@mui/material"
import { tasksApi } from '@/apis';
// import tasksApi  from '@/apis';
import { useRouter } from 'next/router';

export const TaskForm = () => {
  
  // const navigate = useNavigate()
  const router = useRouter()

  const [task, setTask] = useState({
    title:'',
    description:''
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await tasksApi.post('/tasks',{task})
    console.log(resp);
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
              Create Task
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                name='title'
                onChange={handleChange}
                value={task.title}
                variant="filled"
                label="Write yout title"
                placeholder="test"
                fullWidth
                sx={{ my: 1}}
              />
              
              <TextField
                name='description'
                onChange={handleChange}
                variant="filled"
                label="Write yout description"
                placeholder="test"
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