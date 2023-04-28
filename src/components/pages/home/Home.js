import React from 'react'
import Landing from '../landing/Landing';
import Info from '../info/Info';
import Objectives from '../objectives/Objectives';
import Creators from '../creators/Creators';
import Courses from '../courses/Courses';
import Navigation from '../../layouts/Navigation'
import '../../../App.css';
import { Provider } from '../../../context';
import Footer from '../../layouts/Footer';

function Home() {
  return (
      <Provider>
        <div className="App">
          <Navigation/>
          <Landing/>
          <Info/>
          <Objectives/>
          <Courses/>
          <Creators/>
          <Footer/>
        </div>
    </Provider>
  )
}

export default Home