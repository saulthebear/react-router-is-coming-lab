import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Houses from './components/Houses'
import House from './components/House'
import Member from './components/Member'

import gameOfThrones from './gameOfThrones'

export default function App() {
  const houseData = gameOfThrones
  console.log(houseData)

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={<Houses houseData={houseData} />}
          />

          <Route
            exact path="/houses/:id"
            element={<House houses={houseData} />}
          />

          <Route
            path="/houses/:houseId/member/:memberId"
            element={<Member houses={houseData} />}
          />
        </Routes>
      </Router>
    </div>
  )
}
