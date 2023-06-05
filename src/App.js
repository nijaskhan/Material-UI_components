import MuiText from './components/MuiText';
import MuiButtons from './components/MuiButtons';
import DropDown from './components/DropDown';
import MuiRadio from './components/MuiRadio';
import MuiCheckbox from './components/MuiCheckbox';
import './App.css';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiLayout from './components/MuiLayout';
import MuiCard from './components/MuiCard';
import MuiAccordian from './components/MuiAccordian';
import MuiNavbar from './components/MuiNavbar';
import MuiBreadcrumps from './components/MuiBreadcrumps';
import MuiDrawer from './components/MuiDrawer';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiBottomNav from './components/MuiBottomNav';

function App() {
  return (
    <>
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
      <MuiAccordian />
      <MuiSpeedDial />
      <MuiBottomNav />
    </>
  );
}

export default App;
