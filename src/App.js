import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import {dark} from './styles/Themes'
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <GlobalStyles/>
      <ThemeProvider theme={dark}>
      <Navigation/>
      <Home/>
      <About/>
      <Roadmap/>
      <Showcase/>
      <Faq/>
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
