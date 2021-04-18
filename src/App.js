import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Navbar } from './components';
import { Top } from './components';
import { Middle } from './components';
import { Bottom } from './components';
import { Footer } from './components';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Top />
      <Middle />
      <Bottom />
      <Footer />
    </Router>
  );
}

export default App;
