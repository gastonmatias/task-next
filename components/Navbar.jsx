import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import LinkMUI from '@mui/material/Link';
import NextLink from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  
  const router = useRouter()
  
  return (
    <>
    <Box sx={{flexGrow:1}} >
      <AppBar 
        position="static" 
        color="transparent"
        // elevation={0}
        >
        <Container maxWidth="xl" sx={{py:1}}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              sx={{flexGrow:1}}

              >
                
                <LinkMUI 
                  component={NextLink}  // component de react-router!
                  href="/"
                  underline="none"
                  color='white'
                  >
                  Task App
                </LinkMUI>
            </Typography>
            
            <Button
              variant="contained" 
              color="primary"
              onClick={() => router.push("/tasks/create")}
              >
              New Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    </>
  )
}
