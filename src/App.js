import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Navbar } from './components';
import { Top } from './components';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Top />
    </Router>
  );
}

export default App;
