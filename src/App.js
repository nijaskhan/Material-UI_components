import MuiText from './components/MuiText';
import MuiButtons from './components/MuiButtons';
import DropDown from './components/DropDown';
import MuiRadio from './components/MuiRadio';
import MuiCheckbox from './components/MuiCheckbox';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiLayout from './components/MuiLayout';
import MuiCard from './components/MuiCard';
import MuiAccordian from './components/MuiAccordian';
import MuiNavbar from './components/MuiNavbar';
import MuiBreadcrumps from './components/MuiBreadcrumps';
import MuiDrawer from './components/MuiDrawer';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiBottomNav from './components/MuiBottomNav';
import MuiListing from './components/MuiListing';
import MuiChip from './components/MuiChip';
import MuiTable from './components/MuiTable';
import MuiAlert from './components/MuiAlert';
import MuiSnakbar from './components/MuiSnakbar';
import MuiDialogue from './components/MuiDialogue';
import MuiProgress from './components/MuiProgress';
import MuiLoadingBtn from './components/MuiLoadingBtn';
import MuiDateTime from './components/MuiDateTime';
import MuiTabs from './components/MuiTabs';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import './App.css';

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: colors.deepPurple[700]
      }
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiNavbar />
        <MuiDrawer />
        <MuiBreadcrumps />
        <MuiButtons />
        <MuiText />
        <DropDown />
        <MuiRadio />
        <MuiCheckbox />
        <MuiAutocomplete />
        <MuiLayout />
        <MuiCard />
        <MuiListing />
        <MuiChip />
        <MuiTable />
        <MuiAlert />
        <MuiSnakbar />
        <MuiDialogue />
        <MuiProgress />
        <MuiLoadingBtn />
        <MuiDateTime />
        <MuiTabs />
        <MuiAccordian />
        <MuiSpeedDial />
        <MuiBottomNav />
      </ThemeProvider>
    </>
  );
}

export default App;
