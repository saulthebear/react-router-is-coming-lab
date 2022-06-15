import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Houses from "./components/pages/Houses"
import Member from "./components/pages/Member"
import House from "./components/pages/House"
import "./App.css"

import gameOfThrones from "./gameOfThrones.js"

function App() {
  const [favHouses, setFavHouses] = useState([])
  const [favCharacters, setFavCharacters] = useState([])

  const toggleFavHouse = (house) => {
    const favHouseIds = favHouses.map((house) => house.id)
    const idx = favHouseIds.indexOf(house.id)
    if (idx >= 0) {
      const newFaveHouses = [...favHouses]
      newFaveHouses.splice(idx, 1)
      setFavHouses(newFaveHouses)
    } else {
      const newFaveHouses = [...favHouses, house]
      setFavHouses(newFaveHouses)
    }
  }

  const toggleFavCharacter = (character) => {
    const favCharacterIds = favCharacters.map((character) => character.id)
    const idx = favCharacterIds.indexOf(character.id)
    if (idx >= 0) {
      const newFaveCharacters = [...favCharacters]
      newFaveCharacters.splice(idx, 1)
      setFavCharacters(newFaveCharacters)
    } else {
      const newFaveCharacters = [...favCharacters, character]
      setFavCharacters(newFaveCharacters)
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/houses"
            element={
              <Houses
                data={gameOfThrones}
                onFav={toggleFavHouse}
                favs={favHouses}
              />
            }
          />
          <Route
            path="/houses/:id"
            element={
              <House
                data={gameOfThrones}
                onFav={toggleFavCharacter}
                favs={favCharacters}
              />
            }
          />
          <Route
            path="/houses/:houseId/members/:memberId"
            element={<Member data={gameOfThrones} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
