import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Intro />
        <About />
        <Experience />
      </div>
    </>
  );
}

export default App;
