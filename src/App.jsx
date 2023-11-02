import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const ref = useRef(null);
  const loadingBarRef = useRef(null);
  const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;

  const setProgress = (progress) => {
    if (loadingBarRef.current) {
      loadingBarRef.current.staticStart();
      loadingBarRef.current.continuousStart();
      loadingBarRef.current.complete();
    }
  };
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar color='#f11946' ref={ref} height='5px'/>
        {/* <button onClick={() => ref.current.continuousStart()}>
          Start Continuous Loading Bar
        </button>
        <button onClick={() => ref.current.staticStart()}>
          Start Static Loading Bar
        </button>
        <button onClick={() => ref.current.complete()}>Complete</button> */}
        <br />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" category={"general"} />} />
          <Route path='/about' element={<News setProgress={setProgress} apiKey={apiKey} key="general" category={"general"} />} />
          <Route path='/home' element={<News setProgress={setProgress} apiKey={apiKey} key="general" category={"general"} />} />
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category={"sports"} />} />
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" category={"business"} />} />
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" category={"science"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
