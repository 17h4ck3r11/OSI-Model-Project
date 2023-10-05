import React from 'react'
import PhysicalLayer from './PhysicalLayer';
import DataLinkLayer from './DataLinkLayer';
import NetworlLayer from './NetworlLayer';
import TransportLayer from './TransportLayer';
import SessionLayer from './SessionLayer';
import PresentationLayer from './PresentationLayer';
import ApplicationLayer from './ApplicationLayer';
import Heading from './Heading';
import {Routes, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Navbar from './Navbar';

function AnimatedComponent() {
  const location = useLocation()
  return (
    <AnimatePresence>
        <Navbar />
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Heading />}></Route>
            <Route exact path='/physicallayer' element={<PhysicalLayer />}></Route>
            <Route exact path='/datalinklayer' element={<DataLinkLayer />}></Route>
            <Route exact path='/networklayer' element={<NetworlLayer />}></Route>
            <Route exact path='/transportlayer' element={<TransportLayer />}></Route>
            <Route exact path='/sessionlayer' element={<SessionLayer />}></Route>
            <Route exact path='/presentationlayer' element={<PresentationLayer />}></Route>
            <Route exact path='/applicationlayer' element={<ApplicationLayer />}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedComponent
