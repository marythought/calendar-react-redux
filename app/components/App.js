import React from 'react'
import Footer from './Footer'
import AddEvent from '../containers/AddEvent'
import VisibleEventsList from '../containers/VisibleEventsList'

const App = () =>
  <div>
    <AddEvent />
    <VisibleEventsList />
    <Footer />
  </div>

export default App
