import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from '../src/theme'
import "react-datetime/css/react-datetime.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
