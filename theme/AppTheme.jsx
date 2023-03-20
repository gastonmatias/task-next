import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {red } from "@mui/material/colors"

const darkTheme = createTheme({
    palette:{
        mode: 'dark',
        // primary: teal,
        background:{
            default: '#2d3438'
        },
        error: {
            main: red[400],
        }
    }
})

// * ojo: esta fx no funca 
//* al envolver <Component/> con <ThemeUI/> en _app.js
//* MEJOR manejar themeProvider directamente en _app
// function ThemeMUI() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//     </ThemeProvider>
//   );
// }

export default darkTheme;
