import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About';
import Speakerlist from './Components/Speakerlist';
import SpeakerDeatils from './Components/SpeakerDeatils';
import EventList from './Components/EventList';
import EventDetailsSection from './Components/EventDetailsSection';
import OurSponsor from './Components/OurSponsor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/speaker-list" element={<Speakerlist/>} />
        <Route path="/speaker-detail" element={<SpeakerDeatils/>} />
        <Route path="/event-list" element={<EventList/>} />
        <Route path="/event-detail" element={<EventDetailsSection/>} />
        <Route path="/our-sponsor" element={<OurSponsor/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
