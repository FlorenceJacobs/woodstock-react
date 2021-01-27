import React, { Fragment } from 'react'
import './App.css'
import Jumbotron from './components/Jumbotron'
import Section from './components/Section'
import FocusSection from './components/FocusSection'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import chaise from './img/chaise.jpg'
import restaurant from './img/restaurant.jpg'
import bureau from './img/bureau.jpg'


const App = ({ title })  => {
  return (
    <Fragment>
      <Jumbotron><Navbar /></Jumbotron>
      <Section sectionTitle="ABOUT US" buttonTitle="LEARN MORE" imgSrc={chaise} imgClass="about">
        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus</span>
      </Section>
      <Section sectionTitle="SHOP" buttonTitle="GO SHOPPING" imgSrc={restaurant} imgClass="shop">
        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus</span>
      </Section>
      <FocusSection sectionTitle="GOOG MINDSET" buttonTitle="MEET THE TEAM" imgSrc={bureau} imgClass="team">
        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus</span>
      </FocusSection>
      <Contact />
    </Fragment>
  )
}

export default App
