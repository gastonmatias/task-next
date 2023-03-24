import { Box, Typography } from "@mui/material";
import LinkMUI from '@mui/material/Link';
import NextLink from "next/link";

// pages/404.js
export default function Custom404() {
    return( 
      <>
      <Box 
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height: '90vh',
        alignItems:'center' 
      }}>
        
        <Typography variant="h3" textAlign='center'>Oops! 404 Not Found</Typography>
        
        <Box>
          <LinkMUI
            component={NextLink} 
            href='/' 
            variant="button"
            underline='none'
          >
            Back to Home
          </LinkMUI>
        </Box>
      </Box>
      </>
    )
  }